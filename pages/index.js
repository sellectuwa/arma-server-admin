import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import fetch from 'node-fetch';
import { useCookies } from 'react-cookie';

import {
  Box,
  Center,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import AuthContext from '../context/authContext';
import LoginForm from '../components/LoginForm';

export default function Home() {
  const router = useRouter();

  const { user, setUser } = useContext(AuthContext);
  const [cookies, setCookies] = useCookies('sessionId');

  const [ready, setReady] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useDisclosure();

  useEffect(async () => {
    if (!user.isLoggedIn) {
      if (cookies.sessionId) {
        const body = { sessionId: cookies.sessionId };

        const res = await fetch('/api/session', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await res.json();

        if (data.username) {
          return setUser({
            isLoggedIn: true,
            username: data.username,
          });
        }
      }
    }
    return setReady(true);
  }, []);

  useEffect(() => {
    if (user.isLoggedIn) {
      router.push('/dashboard');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { username, password };

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (data.username) {
      setCookies('sessionId', data.sessionId);
      setUser({
        isLoggedIn: true,
        username: data.username,
      });
      errorMessage.onClose();
    } else {
      errorMessage.onOpen();
    }
  };

  if (!ready) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{
        base: '4',
        lg: '8',
      }}
    >
      <Head>
        <title>Arma 3 Server</title>
      </Head>
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Arma 3 Server
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Login to your admin panel</Text>
        </Text>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="8"
          px={{
            base: '4',
            md: '10',
          }}
          shadow="base"
          rounded={{
            sm: 'lg',
          }}
        >
          <LoginForm
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
          />
        </Box>
      </Box>
    </Box>
  );
}
