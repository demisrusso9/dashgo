import {
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label: string
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <ChakraInput
      name={name}
      focusBorderColor='teal.500'
      bgColor='blackAlpha.500'
      variant='filled'
      size='lg'
      placeholder={label}
      _hover={{ bgColor: 'blackAlpha.500' }}
      {...rest}
    />
  )
}
