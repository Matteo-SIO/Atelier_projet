import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.promeo.stockman',
  appName: 'Gestion des stocks',
  webDir: 'build',
  server: {
    cleartext: true
  }
};

export default config;
