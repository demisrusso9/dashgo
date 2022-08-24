import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from, to) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  // total: 35 | per_page: 10 // must have 4 pages with 5 registers
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : []

  const from = registersPerPage * currentPage - registersPerPage
  const to = registersPerPage * currentPage

  return (
    <Stack direction={['column', 'row']} mt='8' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>{from}</strong> - <strong>{to}</strong> de <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack direction='row' spacing='2'>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color='gray.300' width='8' textAlign='center'>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => <PaginationItem onPageChange={onPageChange} key={page} number={page} />)}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map(page => <PaginationItem onPageChange={onPageChange} key={page} number={page} />)}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color='gray.300' width='8' textAlign='center'>
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

        {/* <>
          {currentPage >= 3 && <PaginationItem onPageChange={onPageChange} number={1} />}
          {currentPage > 3 && <Text>...</Text>}

          {currentPage > 1 && <PaginationItem onPageChange={onPageChange} number={currentPage - 1} />}

          <PaginationItem onPageChange={onPageChange} isCurrent number={currentPage} />

          {currentPage < lastPage - 1 && (
            <PaginationItem onPageChange={onPageChange} number={currentPage + 1} />
          )}

          {currentPage < lastPage - 2 && <Text>...</Text>}
          {currentPage != lastPage && <PaginationItem onPageChange={onPageChange} number={lastPage} />}
        </> */}
      </Stack>
    </Stack>
  )
}
