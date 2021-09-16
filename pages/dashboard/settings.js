import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { Center, Spinner } from '@chakra-ui/react';

import AuthContext from '../../context/authContext';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

const Settings = () => {
  const router = useRouter();
  const [cookies] = useCookies(['sessionId']);
  const { user, setUser } = useContext(AuthContext);

  useEffect(async () => {
    if (!user.isLoggedIn) {
      if (cookies.sessionId) {
        const { data: response } = await axios.post('/api/session', {
          sessionId: cookies.sessionId,
        });

        if (response.username) {
          return setUser({
            isLoggedIn: true,
            username: response.username,
          });
        }
      }
      return router.push('/');
    }
    return undefined;
  }, [user]);

  if (!user.isLoggedIn) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <DashboardLayout>
      <Head>
        <title>Settings - Arma 3 Server</title>
      </Head>
      <p>This is settings view!</p>
    </DashboardLayout>
  );
};

export default Settings;
