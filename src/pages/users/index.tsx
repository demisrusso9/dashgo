import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Sidebar } from '../../components/Form/Sidebar'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' px='6' maxWidth={1480} mx='auto'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading fontSize='lg' fontWeight='normal'>
              Listagem de Usuários
            </Heading>

            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='teal'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='teal' />
                </Th>

                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='teal' />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight='bold'>Demis Russo</Text>
                    <Text fontSize='sm' color='gray.300' fontWeight='bold'>
                      demisjunior@hotmail.com
                    </Text>
                  </Box>
                </Td>

                <Td>01 de Julho, 2022</Td>

                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='blue'
                    leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
