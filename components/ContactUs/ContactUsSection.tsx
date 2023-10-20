import View from '@components/View'
import Grid from '@components/Grid'
import ContactUsForm from './ContactUsForm'
import Maps from './Maps'
import { CSS } from '@config/stitches'

export default function ContactUsSection({ css }: { css?: CSS }) {
  return (
    <View as="section" css={css}>
      <Grid
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
      </Grid>
    </View>
  )
}
