import { Input } from '@chakra-ui/react';
import { isNotEmpty } from '../../utils';

interface IPasswordInputProps {
  errors: any;
  state: any;
  register: any;
  inputPasswordValidation: any;
}

export const InputPassword = ({ errors, state, register, inputPasswordValidation }: IPasswordInputProps) => {
  return (
    <Input
      type="password"
      id="input-password"
      size={'md'}
      className={errors.password ? 'form-shake-2' : ''}
      borderColor={(errors.password || isNotEmpty(state.login.errorMessage)) ? 'red.300' : 'blackAlpha.100'}
      focusBorderColor={(errors.password || isNotEmpty(state.login.errorMessage)) ? 'red.300' : 'blackAlpha.100'}
      {...register('password', inputPasswordValidation)}
    />
  );
};

