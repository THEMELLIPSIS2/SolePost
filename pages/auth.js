import supabase from '../supabase';
import { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

export default function Auth() {
  const [user, setUser] = useState(null);

  supabase.auth.onAuthStateChange((e, session) => {
    if (session?.user) {
      setUser((user) => (user = session.user));
    }
  });

  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUser((user) => (user = null));
  }

  return (
    <main className={styles.container}>
      {!user ? (
        <button onClick={signInWithGithub}>SIGN IN WITH GITHUB</button>
      ) : (
        <button onClick={signOut}>SIGN OUT {user?.email}</button>
      )}
    </main>
  );
}
