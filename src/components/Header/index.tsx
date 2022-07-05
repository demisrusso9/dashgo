import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex
      as='header'
      w='100%'
      h='20'
      maxWidth='1480px'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          onClick={onOpen}
          mr='2'
          variant='unstyled'
        />
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex align='center' ml='auto'>
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
