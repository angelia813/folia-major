import type { CapacitorConfig } from '@capacitor/cli';

// Capacitor iOS 壳配置：壳内直接加载线上站（server.url），用于 SideStore 自签侧载试用。
const config: CapacitorConfig = {
  appId: 'net.annie813.folia',
  appName: 'Folia',
  webDir: 'dist',
  server: {
    url: 'https://folia.annie813.de5.net',
    cleartext: false,
  },
};

export default config;
