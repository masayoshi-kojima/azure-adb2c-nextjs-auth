import { AccountInfo } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';

interface Account extends AccountInfo {
  idTokenClaims: {
    aud: string;
    auth_time: number;
    family_name: string;
    given_name: string;
    emails: string[];
    iss: string;
    nbf: number;
    nonce: string;
    sub: string;
    tfp: string;
    ver: string;
  };
}

export interface User {
  sub: string;
  familyName: string;
  givenName: string;
}

const useCurrentUser = (): User | null | undefined => {
  const { accounts } = useMsal();
  if (accounts.length > 0) {
    const account = accounts[0] as Account;
    console.log(account)
    const user: User = {
      sub: account.idTokenClaims?.sub,
      familyName: account.idTokenClaims?.family_name,
      givenName: account.idTokenClaims?.given_name
    };
    return user;
  }
  return null;
};

export default useCurrentUser;