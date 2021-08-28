import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Box, Center, Heading, Spinner } from '@chakra-ui/react';

import AuthContext from '../../context/authContext';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

const Dashboard = () => {
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
        <title>Dashboard - Arma 3 Server</title>
      </Head>
      <Box p="60px">
        <Heading>Hello, {user.username}</Heading>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
