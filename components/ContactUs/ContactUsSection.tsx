import { View } from '@components'
import Container from '@components/Container'
import Grid from '@components/Grid'
import ContactUsForm from './ContactUsForm'
import Maps from './Maps'

export default function ContactUsSection() {
  return (
    <View as="section" css={{ py: '$9', backgroundColor: '$white1' }}>
      <Container
        size="large2"
        as={Grid}
        gap={{ '@initial': '6', '@desktop': '4' }}
        columns="2"
        css={{
          gridTemplate: '"maps" "form"',

          '& > div': { width: '100%' },

          '&:first-child': { gridArea: 'maps' },
          '&:last-child': { gridArea: 'form' },
          '@desktop': { gridTemplate: '"maps form" auto / 1fr 1fr' },
        }}
        align="center"
      >
        <Maps />
        <ContactUsForm />
      </Container>
    </View>
  )
}
