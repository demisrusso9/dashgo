import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h='20'
      maxWidth='1480px'
      mx='auto'
      mt='4'
      px='7'
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        dashgo
        <Text as='span' ml='1' color='teal.500'>
          .
        </Text>
      </Text>

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

      <Flex align='center' ml='auto'>
        <HStack
          spacing={8}
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderRightColor='gray.700'
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserAddLine} />
        </HStack>

        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Demis Russo</Text>
            <Text color='gray.300' fontSize='small'>
              demisjunior@hotmail.com
            </Text>
          </Box>

          <Avatar src='https://github.com/demisrusso9.png' name='Demis Russo' />
        </Flex>
      </Flex>
    </Flex>
  )
}
