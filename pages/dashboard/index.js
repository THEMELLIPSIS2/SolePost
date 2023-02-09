import { signIn, signOut, useSession } from 'next-auth/react';

export default function Dashboard(props) {
  const { session } = useSession();

  if (session) {
    return (
      <div>
        Authenticated <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      Unauthenticated Boi <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
