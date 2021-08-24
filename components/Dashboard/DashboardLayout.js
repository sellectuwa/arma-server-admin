import { Flex } from '@chakra-ui/react';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const DashboardLayout = ({ children }) => {
  return (
    <Flex h="100vh">
      <DashboardSidebar />
      {children}
    </Flex>
  );
};

export default DashboardLayout;
