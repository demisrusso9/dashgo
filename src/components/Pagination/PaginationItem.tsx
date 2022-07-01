import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
}

export function PaginationItem({
  number,
  isCurrent = false
}: PaginationItemProps) {
  return isCurrent ? (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme='teal'
      disabled
      _disabled={{ bgColor: 'teal.500', cursor: 'default' }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='grey.700'
      _hover={{ bg: 'grey.500' }}
    >
      {number}
    </Button>
  )
}
