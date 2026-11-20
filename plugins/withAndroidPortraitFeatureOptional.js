const { withAndroidManifest } = require('expo/config-plugins');

const FEATURE = 'android.hardware.screen.portrait';

module.exports = function withAndroidPortraitFeatureOptional(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults.manifest;
    manifest['uses-feature'] = manifest['uses-feature'] ?? [];
    const existing = manifest['uses-feature'].find((item) => item.$['android:name'] === FEATURE);

    if (existing) {
      existing.$['android:required'] = 'false';
    } else {
      manifest['uses-feature'].push({ $: { 'android:name': FEATURE, 'android:required': 'false' } });
    }

    return config;
  });
};
