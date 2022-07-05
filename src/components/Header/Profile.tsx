import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Demis Russo</Text>
          <Text color='gray.300' fontSize='small'>
            demisjunior@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar src='https://github.com/demisrusso9.png' name='Demis Russo' />
    </Flex>
  )
}
