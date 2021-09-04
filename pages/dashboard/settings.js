import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

import AuthContext from '../../context/authContext';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

const Settings = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/');
    }
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
