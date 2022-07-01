import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Demis Russo</Text>
        <Text color='gray.300' fontSize='small'>
          demisjunior@hotmail.com
        </Text>
      </Box>

      <Avatar src='https://github.com/demisrusso9.png' name='Demis Russo' />
    </Flex>
  )
}
