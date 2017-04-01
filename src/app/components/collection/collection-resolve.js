export default ($stateParams, $log, $filter, $rootScope, WPAPI) => {
  'ngInject';
  const page = parseInt($stateParams.page, 10) || 1;
  const slug = $stateParams.slug;
  const taxonomy = $stateParams.taxonomy;
  const wp = new WPAPI({
    endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
  });

  // error handler
  const fail = error => $log.error(error);

  // success handler
  const success = response => {
    // for re-sequencing posts
    const arrayMove = (arr, fromIndex, toIndex) => {
      const element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    };

    const posts = response;
    // filter the date so it can be used by the router
    for (let i = 0; i < posts.length; i++) {
      const postDate = posts[i].date;
      posts[i].year = $filter('date')(postDate, 'yyyy');
      posts[i].month = $filter('date')(postDate, 'MM');
      posts[i].categories = posts[i]._embedded['wp:term'][0];
      posts[i].tags = posts[i]._embedded['wp:term'][1];
      posts[i].featuredimage = posts[i]._embedded['wp:featuredmedia'];
      delete posts[i]._embedded;
      delete posts[i]._links;
    }

    // special handling for post.id 1222
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === 1222) {
        posts[i].sticky = false;
        arrayMove(posts, i, 3);
        break;
      }
    }
    return posts;
  };

  // setup the query if the taxonomy slug is in the URL
  if (taxonomy === 'category') {
    // first use the slug to lookup the category ID
    return wp.categories().slug(slug).then(cats => {
      // set document title on rootscope
      $rootScope.title = cats[0].name;

      if (cats[0].slug === 'books') {
        $rootScope.totem = 'umbrella';
      }
      if (cats[0].slug === 'web-development') {
        $rootScope.totem = 'balloon';
      }
      return wp.posts().categories(cats[0].id).perPage(9).param('page', page).embed();
    }).then(success, fail);

  } else if (taxonomy === 'tag') {
    return wp.tags().slug(slug).then(tags => {
      $rootScope.title = tags[0].name;
      return wp.posts().tags(tags[0].id).perPage(9).param('page', page).embed();
    }).then(success, fail);

  } else if (!taxonomy && !slug && page === 1) {
    $rootScope.title = 'topheavypilesofbooks';
    $rootScope.totem = 'vw-bug';
    return wp.posts().perPage(10).embed().then(success, fail);

  }
  // Default posts
  $rootScope.title = 'topheavypilesofbooks';
  $rootScope.totem = 'vw-bug';
  return wp.posts().param('page', page).perPage(9).embed().then(success, fail);
};
