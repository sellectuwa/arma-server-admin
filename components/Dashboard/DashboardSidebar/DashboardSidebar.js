import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { FaRss } from 'react-icons/fa';
import { AiFillGift } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';

import SidebarItem from './DashboardSidebarItem';

const DashboardSidebar = () => {
  return (
    <Box
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
      display={{ base: 'none', md: 'unset' }}
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
        <SidebarItem icon={MdHome}>Home</SidebarItem>
        <SidebarItem icon={FaRss}>Articles</SidebarItem>
        <SidebarItem icon={AiFillGift}>Changelog</SidebarItem>
        <SidebarItem icon={BsGearFill}>Settings</SidebarItem>
      </Flex>
    </Box>
  );
};

export default DashboardSidebar;
