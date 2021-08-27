import { View } from '@components'

export default function MapSection() {
  return (
    <View as="section">
      <CPIMapIFrame />
    </View>
  )
}

function CPIMapIFrame() {
  return (
    <iframe
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJB_xZQtGYqTMRNPY1g6C2hgg&key=${process.env.NEXT_MAPS_API_KEY}`}
    />
  )
}
