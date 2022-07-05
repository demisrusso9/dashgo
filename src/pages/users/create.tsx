import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import Link from 'next/link'

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' px='6' maxWidth={1480} mx='auto'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='name' label='Nome Completo' />
              <Input name='email' label='E-mail' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input name='password' type='password' label='Senha' />
              <Input
                name='password_confirm'
                type='password'
                label='Confirmação de Senha'
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8'>
            <HStack spacing='4' w='full' justify='flex-end'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha' w={['full', '32']}>
                  Cancelar
                </Button>
              </Link>

              <Button colorScheme='teal' w={['full', '32']}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
