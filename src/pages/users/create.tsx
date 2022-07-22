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
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface CreateUserFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function CreateUser() {
  const schema = yup.object().shape({
    name: yup.string().required('Preencha seu nome completo'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(4, 'No mínimo 4 carateres'),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleCreateUser = async (data: CreateUserFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' px='6' maxWidth={1480} mx='auto'>
        <Sidebar />

        <Box
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                error={errors.name}
                name='name'
                label='Nome Completo'
                {...register('name')}
              />
              <Input
                error={errors.email}
                name='email'
                label='E-mail'
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                error={errors.password}
                name='password'
                type='password'
                label='Senha'
                {...register('password')}
              />
              <Input
                error={errors.password_confirmation}
                name='password_confirmation'
                type='password'
                label='Confirmação de Senha'
                {...register('password_confirmation')}
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

              <Button
                type='submit'
                isLoading={isSubmitting}
                colorScheme='teal'
                w={['full', '32']}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
