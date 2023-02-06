import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../util/theme';
import createEmotionCache from '../util/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    // <SessionContextProvider
    //   supabaseClient={supabaseClient}
    //   initialSession={pageProps.initialSession}
    // >
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    // </SessionContextProvider>
  );
}
export default App;
