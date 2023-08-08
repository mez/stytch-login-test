'use client';

import { B2BProducts, AuthFlowType, StytchB2BUIConfig } from "@stytch/vanilla-js/b2b";
import { StytchB2B } from '@stytch/nextjs/b2b';


const loginConfig: StytchB2BUIConfig = {
  products: [B2BProducts.emailMagicLinks],
      emailMagicLinksOptions: {
        loginRedirectURL: `http://localhost:7000/authredirect`,
        signupRedirectURL: `http://localhost:7000/authredirect`,
      }, 
      authFlowType: AuthFlowType.Discovery,
      sessionOptions: {
        sessionDurationMinutes: 60,
      },
}


export default function Page() {
  return (
      <StytchB2B config={loginConfig} />
  )
}

