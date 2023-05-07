import { useEffect } from 'react';
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
import { setDocumentTitle } from '../../utils';
import { useForm } from 'react-hook-form';
import { inputEmailValidation, inputPasswordValidation } from '../../const';
import { ILogin } from '../../interface';

function Login(): JSX.Element {
  const date = new Date().getFullYear();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onLogin = (event: any) => {
    const value: ILogin = event;
    console.log(value);
    // TODO: login logic
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
            rounded={'3xl'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'md'}
            width={'lg'}
            p={'16'}
          >
            <Stack spacing={4}>
              <FormControl id="input-email">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  type="email"
                  size={'lg'}
                  borderColor={errors.email && 'red.300'}
                  focusBorderColor={errors.email && 'red.300'}
                  {...register('email', inputEmailValidation)}
                />
                {errors.email && (
                  <Text color={'red'} mt={'2'} fontSize={'sm'}>
                    {errors.email.message?.toString()}
                  </Text>
                )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  size={'lg'}
                  borderColor={errors.password && 'red.300'}
                  focusBorderColor={errors.password && 'red.300'}
                  {...register('password', inputPasswordValidation)}
                />
                {errors.password && (
                  <Text color={'red'} mt={'2'} fontSize={'sm'}>
                    {errors.password.message?.toString()}
                  </Text>
                )}
              </FormControl>
              <Stack spacing={10}>
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
                    size={'lg'}
                    leftIcon={<UilSignInAlt size="20" />}
                    colorScheme={'purple'}
                  >
                    Sign in
                  </Button>
                  <Button
                    type={'button'}
                    size={'lg'}
                    colorScheme={'purple'}
                    variant={'outline'}
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
