import Head from 'next/head';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';

const Settings = () => {
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
