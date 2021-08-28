import Head from 'next/head';
import { withRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

import AuthContext from '../../context/authContext';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

const Dashboard = ({ router }) => {
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
      <p>This is main view of dashboard</p>
    </DashboardLayout>
  );
};

export default withRouter(Dashboard);
