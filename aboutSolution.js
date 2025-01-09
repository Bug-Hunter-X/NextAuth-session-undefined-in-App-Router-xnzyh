```javascript
// pages/about.js
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <h1>About Page</h1>
        <p>Logged in as {session.user.email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>About Page</h1>
        <p>You are not logged in.</p>
      </div>
    );
  }
}
```
The solution utilizes the updated `getServerSession` function instead of the unstable `unstable_getServerSession`. This approach addresses the issues associated with session management in the App Router.