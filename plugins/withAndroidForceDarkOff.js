const { withAndroidStyles } = require('expo/config-plugins');

module.exports = function withAndroidForceDarkOff(config) {
  return withAndroidStyles(config, (config) => {
    const styles = config.modResults.resources.style ?? [];
    const appTheme = styles.find((style) => style.$.name === 'AppTheme');

    if (appTheme) {
      appTheme.item = appTheme.item ?? [];
      const existing = appTheme.item.find((item) => item.$.name === 'android:forceDarkAllowed');

      if (existing) {
        existing._ = 'false';
      } else {
        appTheme.item.push({ $: { name: 'android:forceDarkAllowed' }, _: 'false' });
      }
    }

    return config;
  });
};
