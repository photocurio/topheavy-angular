module.exports = gaConfig;

/** @ngInject */
function gaConfig(AnalyticsProvider) {
  AnalyticsProvider.setAccount('UA-35022946-1');
}
