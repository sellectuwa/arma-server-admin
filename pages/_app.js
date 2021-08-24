import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from '../context/authContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <AuthContextProvider>
      <ChakraProvider>
        {pageLoading ? <></> : <Component {...pageProps} />}
      </ChakraProvider>
    </AuthContextProvider>
  );
}
export default MyApp;
