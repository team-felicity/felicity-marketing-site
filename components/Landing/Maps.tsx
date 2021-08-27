import { Container } from '@components'

export default function MapSection() {
  return (
    <Container as="section" size="large2" css={{ width: '100%', pt: '$9' }}>
      <CPIMapIFrame />
    </Container>
  )
}

function CPIMapIFrame() {
  return (
    <iframe
      width="100%"
      height="300"
      style={{ border: 0, borderRadius: 40 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJB_xZQtGYqTMRNPY1g6C2hgg&key=${process.env.NEXT_MAPS_API_KEY}`}
    />
  )
}
