import Image from 'next/image'

import {
  Text,
  Link,
  View,
  Flex,
  Button,
  Grid,
  Sheet,
  TextField,
  Container,
} from '@components'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <View css={{ display: 'grid' }}>
        <Text color="error" as={motion.h1}>
          about page
        </Text>
        <Link href="/" whileHover={{ scale: 1.2 }}>
          <Text>navigate to landing page</Text>
        </Link>
        <Grid gap="4" flow="column">
          <Button variant="secondary">secondary</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="primary">primary</Button>
        </Grid>
        <Flex gap="4">
          <Button variant="secondary">secondary</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="primary">primary</Button>
        </Flex>
        <Flex gap="3">asdasdasd</Flex>
      </View>
      <Container size="small" css={{ gapy: '1rem' }}>
        <TextField placeholder="@ E-mail" size="small" />
        <TextField placeholder="Default" />
        <TextField placeholder="Large" size="large" />
        <TextField
          placeholder="Default"
          variant="flushed"
          error="wow such error"
        />
        <TextField
          placeholder="Default"
          variant="outline"
          error="A valid email address is required so that we can verify your GitHub installation. In the event that you cannot provide a valid email address, please contact support."
        />
      </Container>
      <Sheet.Root>
        <Sheet.Content side="bottom">
          <Text>asdasdasd</Text>
          <Image src="/logo.svg" alt="logo" height={30} width={30} />
        </Sheet.Content>
        <Sheet.Trigger as={Button} variant="ghost">
          trigger
        </Sheet.Trigger>
      </Sheet.Root>
    </>
  )
}
