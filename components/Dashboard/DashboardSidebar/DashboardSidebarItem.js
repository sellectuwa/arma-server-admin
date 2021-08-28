import { useRouter } from 'next/router';
import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';

const DashboardSidebarItem = ({ icon, children, path }) => {
  const router = useRouter();
  const active = router.pathname === path;

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={
        active
          ? useColorModeValue('gray.900', 'gray.200')
          : useColorModeValue('inherit', 'gray.400')
      }
      bg={active ? useColorModeValue('gray.100', 'gray.900') : undefined}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200'),
      }}
      onClick={() => {
        router.push(path);
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: useColorModeValue('gray.600', 'gray.300'),
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default DashboardSidebarItem;
