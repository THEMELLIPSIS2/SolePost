import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../util/theme';
import createEmotionCache from '../util/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App;
