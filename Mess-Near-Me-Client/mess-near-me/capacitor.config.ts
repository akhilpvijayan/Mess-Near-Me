import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mess-near-me',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#ffffff",
      androidScaleType: "CENTER_CROP",
      showSpinner: true
    }
  }
};

export default config;
