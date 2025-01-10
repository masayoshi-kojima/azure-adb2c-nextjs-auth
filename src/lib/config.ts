import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'xxxxx',
    authority: 'https://xxxxx.b2clogin.com/xxxxx.onmicrosoft.com/b2c_xxxxx',
    knownAuthorities: ['xxxxx.b2clogin.com'],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
  },
  cache: {
    cacheLocation: 'localStorage',
  },
};

export const loginRequest = {
  scopes: ['openid', 'offline_access'],
};