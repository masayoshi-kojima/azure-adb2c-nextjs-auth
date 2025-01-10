import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '870466fa-b5e9-463d-84b2-13e661b2ee4a',
    authority: 'https://proeverforcedevb2c.b2clogin.com/proeverforcedevb2c.onmicrosoft.com/B2C_1_signinandsignup',
    knownAuthorities: ['proeverforcedevb2c.b2clogin.com'],
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