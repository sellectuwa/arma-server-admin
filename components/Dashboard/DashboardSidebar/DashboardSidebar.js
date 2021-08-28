import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useCookies } from 'react-cookie';
import {
  Button,
  Center,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaRss } from 'react-icons/fa';
import { AiFillGift } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';

import AuthContext from '../../../context/authContext';
import SidebarItem from './DashboardSidebarItem';

const DashboardSidebar = () => {
  const router = useRouter();
  const { pathname } = router;

  const removeCookie = useCookies(['sessionId'])[2];
  const { setUser } = useContext(AuthContext);

  const logout = () => {
    removeCookie('sessionId');
    setUser({
      isLoggedIn: false,
      username: '',
    });
  };

  return (
    <Flex
      direction="column"
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="60"
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('brand.500', 'white')}
          fontWeight="semibold"
        >
          Admin Panel
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <SidebarItem active={pathname === '/dashboard'} icon={MdHome}>
          Home
        </SidebarItem>
        <SidebarItem icon={FaRss}>Articles</SidebarItem>
        <SidebarItem icon={AiFillGift}>Changelog</SidebarItem>
        <SidebarItem icon={BsGearFill}>Settings</SidebarItem>
      </Flex>
      <Spacer />
      <Center py="15px">
        <Button colorScheme="blue" size="sm" onClick={logout}>
          Logout
        </Button>
      </Center>
    </Flex>
  );
};

export default DashboardSidebar;
