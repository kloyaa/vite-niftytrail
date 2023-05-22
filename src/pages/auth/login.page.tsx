import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { UilSignInAlt } from '@iconscout/react-unicons';
import { HttpClient, isNotEmpty, setDocumentTitle } from '../../utils';
import { useForm } from 'react-hook-form';
import { inputPasswordValidation, inputUsernameValidation } from '../../const';
import { API, HttpMethod } from '../../enum';
import { AxiosRequestConfig } from 'axios';
import { ILogin } from '../../interface';
import { InputPassword } from '../../components';
import { InputUsername } from '../../components/input/username.input.component';
import { useDeviceInfo } from '../../hooks';

function Login(): JSX.Element {
  const date = new Date().getFullYear();
  const httpClient = new HttpClient();

  const deviceInfo = useDeviceInfo();
  const [state, setState] = useState({
    login: {
      errorMessage: ''
    }
  });
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();


  const onLogin = async (event: any) => {
    const value: ILogin = event;
    const inputUsername = document.getElementById('input-username');
    const inputPassword = document.getElementById('input-password');
   
    try {
      const configPayload: AxiosRequestConfig = {
        method: HttpMethod.POST,
        url: API.LOGIN,
        data: {
          "username": value.username,
          "password": value.password,
          "device": deviceInfo
        },
      }
      const response = await httpClient.request<{ accessToken: string }>(configPayload);
    } catch (error: any) {
      if (inputUsername && inputPassword) {
        inputUsername.classList.add('form-shake');     
        inputPassword.classList.add('form-shake-2');   

        setTimeout(() => {
          inputUsername.classList.remove('form-shake');
          inputPassword.classList.remove('form-shake-2');
        }, 1000); // 
      }
      setState((prev) => ({
        ...prev,
        login: {
          errorMessage: error.message
        }
      }));
    }
  };

  useEffect(() => {
    setDocumentTitle('Login');
    const inputElement = document.getElementById('input-email');
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <Box>
      <Flex
        direction={'column'}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <form onSubmit={handleSubmit(onLogin)}>
          <Box
            rounded={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'sm'}
            width={'sm'}
            p={'12'}
          >
            <Stack spacing={4}>
              <FormControl id="input-email">
                <FormLabel htmlFor="email">Username</FormLabel>
                <InputUsername
                  errors={errors}
                  state={state}
                  register={register}
                  inputUsernameValidation={inputUsernameValidation}
                />
                {errors.username && (
                  <Text color={'red'} mt={'2'} fontSize={'sm'}>
                    {errors.username.message?.toString()}
                  </Text>
                )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputPassword
                  errors={errors}
                  state={state}
                  register={register}
                  inputPasswordValidation={inputPasswordValidation}
                />
                {errors.password && (
                  <Text color={'red'} mt={'2'} fontSize={'sm'}>
                    {errors.password.message?.toString()}
                  </Text>
                )}
                {isNotEmpty(state.login.errorMessage) && (
                  <Text color={'red'} mt={'2'} fontSize={'sm'}>
                    { state.login.errorMessage.toString() }
                  </Text>
                )}
              </FormControl>
              <Stack spacing={'20'}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Flex direction={'column'} gap={'2'}>
                  <Button
                    type={'submit'}
                    size={'md'}
                    leftIcon={<UilSignInAlt size="20" />}
                    colorScheme={'purple'}
                    isLoading={isSubmitting}
                  >
                    Sign in
                  </Button>
                  <Button
                    type={'button'}
                    size={'md'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                  >
                    Don't have account?
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </form>
        <Box mt={'20'} textAlign={'center'}>
          <Text color={'gray'}>&copy; Niftytrail 2019 - {date}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
