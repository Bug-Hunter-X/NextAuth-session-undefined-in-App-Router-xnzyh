# NextAuth Session Undefined in App Router

This repository demonstrates a bug encountered when using NextAuth.js with the new Next.js App Router.  After successful login, the session object remains undefined in a protected route, preventing access to user data.  The issue only occurs in the App Router and not with the Pages Router.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Set up your environment variables as detailed in the `README.md` of the NextAuth.js documentation.
4. Run `npm run dev`.
5. Log in using the login form provided.
6. Navigate to the `/about` page.

Observe that the session object is always undefined, resulting in the "You are not logged in" message even after successful authentication.

## Solution

A proposed solution and explanation is provided in `aboutSolution.js` which demonstrates usage of `getServerSession` instead of `unstable_getServerSession`.  Make sure that the necessary adjustments are made to your own project setup.