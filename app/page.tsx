'use client';

import { StytchLogin } from "@stytch/nextjs";
import { Products, StytchLoginConfig } from "@stytch/vanilla-js";

const loginConfig: StytchLoginConfig = {
  products: [Products.emailMagicLinks],
      emailMagicLinksOptions: {
        loginRedirectURL: `http://localhost:3000/authredirect`,
        loginExpirationMinutes: 30,
        signupRedirectURL: `http://localhost:3000/authredirect`,
        signupExpirationMinutes: 30,
        createUserAsPending: true,
      }, 
}


export default function Page() {
  return (
      <StytchLogin config={loginConfig} />
  )
}

