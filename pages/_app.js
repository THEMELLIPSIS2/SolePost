import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../util/theme';
import createEmotionCache from '../util/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {Provider} from 'react-redux'
import store from '../store'
const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
    </Provider>
  );
}
export default App;
