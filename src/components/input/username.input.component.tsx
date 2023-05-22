import { Input } from '@chakra-ui/react';
import { isNotEmpty } from '../../utils';

interface IUsernameInputProps {
  errors: any;
  state: any;
  register: any;
  inputUsernameValidation: any;
}

export const InputUsername= ({ errors, state, register, inputUsernameValidation }: IUsernameInputProps) => {
  return (
    <Input
      type="text"
      id="input-username"
      size={'md'}
      className={errors.username ? 'form-shake-2' : ''}
      borderColor={(errors.username || isNotEmpty(state.login.errorMessage)) ? 'red.300' : 'blackAlpha.100'}
      focusBorderColor={(errors.username || isNotEmpty(state.login.errorMessage)) ? 'red.300' : 'blackAlpha.100'}
      {...register('username', inputUsernameValidation)}
    />
  );
};

