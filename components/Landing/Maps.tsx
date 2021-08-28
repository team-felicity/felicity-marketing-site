import { Container, Flex } from '@components'
import ScrollReveal from '@components/ScrollReveal'
import Text from '@components/Text'

const MAP_WIDTH = 300
const BORDER_RADIUS = 40

export default function MapSection() {
  return (
    <ScrollReveal>
      <Container as="section" size="large2" css={{ width: '100%', pt: '$9' }}>
        {process.env.NODE_ENV === 'development' ? (
          <Flex
            justify="center"
            align="center"
            style={{
              height: MAP_WIDTH,
              width: '100%',
              background: '#333',
              borderRadius: 40,
            }}
          >
            <Text color="white1">visual placeholder</Text>
          </Flex>
        ) : (
          <CPIMapIFrame />
        )}
      </Container>
    </ScrollReveal>
  )
}

function CPIMapIFrame() {
  return (
    <iframe
      width="100%"
      height={MAP_WIDTH}
      style={{ border: 0, borderRadius: BORDER_RADIUS }}
      loading="lazy"
      title="Felicity Office Location"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJB_xZQtGYqTMRNPY1g6C2hgg&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
    />
  )
}
