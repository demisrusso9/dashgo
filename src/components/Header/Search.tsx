import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function Search() {
  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxW={400}
      alignSelf='center'
      position='relative'
      color='gray.200'
      bg='gray.800'
      rounded='full'
    >
      <Input
        color='gray.50'
        variant='unstyled'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} />
    </Flex>
  )
}
