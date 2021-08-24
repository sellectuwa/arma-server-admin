import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';

const DashboardSidebarItem = ({ icon, children }) => {
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200'),
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
