import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label?: string
  error?: Omit<FieldError, 'type'>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor='password'>{label}</FormLabel>}

        <ChakraInput
          {...rest}
          id={rest.name}
          ref={ref}
          focusBorderColor='teal.500'
          bgColor='gray.900'
          variant='filled'
          _hover={{ bgColor: 'gray.900' }}
          size='lg'
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    )
  }
)
