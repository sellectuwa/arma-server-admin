import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

const LoginForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const showPassword = useDisclosure();

  return (
    <chakra.form onSubmit={handleSubmit}>
      <Stack spacing="6">
        <FormControl id="login" isRequired>
          <FormLabel>Login</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaUser />
            </InputLeftElement>
            <Input
              name="login"
              type="text"
              autoComplete="login"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaLock />
            </InputLeftElement>
            <Input
              name="password"
              type={showPassword.isOpen ? 'text' : 'password'}
              autoComplete="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={
                  showPassword.isOpen
                    ? showPassword.onClose
                    : showPassword.onOpen
                }
              >
                {showPassword.isOpen ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default LoginForm;
