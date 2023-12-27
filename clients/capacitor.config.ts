import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.promeo.stockman',
  appName: 'Gestion des stocks',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
