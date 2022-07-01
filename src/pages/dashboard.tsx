import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { theme } from '../styles/theme'

// window is not available in NEXTJS server
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      labels: {
        formatter: function (val, timestamp) {
          return new Date(val).toLocaleDateString()
        }
      },
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[500]
      }
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z'
    ],
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  }

  const series = [
    {
      name: 'Series 1',
      data: [78, 120, 43, 344, 36, 613, 221]
    }
  ]

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' px='6' maxWidth={1480} mx='auto'>
        <Sidebar />

        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'
        >
          <Box p='8' pb='4' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Inscritos da semana
            </Text>

            <Chart type='area' height={160} options={options} series={series} />
          </Box>

          <Box p='8' pb='4' bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>
              Taxa de abertura
            </Text>

            <Chart type='area' height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
