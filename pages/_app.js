import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react';

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
    <CookiesProvider>
      <AuthContextProvider>
        <ChakraProvider>
          {pageLoading ? (
            <Center h="100vh">
              <Spinner size="xl" />
            </Center>
          ) : (
            <Component {...pageProps} />
          )}
        </ChakraProvider>
      </AuthContextProvider>
    </CookiesProvider>
  );
}
export default MyApp;
