import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

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
      <Logo />
      <Search />

      <Flex align='center' ml='auto'>
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  )
}
