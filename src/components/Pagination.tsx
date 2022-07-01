import { Button, Stack, Box } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacing='2'>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          colorScheme='teal'
          disabled
          _disabled={{ bgColor: 'teal.500', cursor: 'default' }}
        >
          1
        </Button>

        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='grey.700'
          _hover={{ bg: 'grey.500' }}
        >
          2
        </Button>

        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='grey.700'
          _hover={{ bg: 'grey.500' }}
        >
          3
        </Button>

        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='grey.700'
          _hover={{ bg: 'grey.500' }}
        >
          4
        </Button>

        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='grey.700'
          _hover={{ bg: 'grey.500' }}
        >
          5
        </Button>
      </Stack>
    </Stack>
  )
}
