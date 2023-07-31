import View from '@components/View'
import Flex from '@components/Flex'
import Text from '@components/Text'

const BORDER_RADIUS = 40

export default function MapSection() {
  return (
    <View css={{ height: 300, '@desktop': { height: '100%' } }}>
      {process.env.NODE_ENV === 'development' ? (
        <Flex
          justify="center"
          align="center"
          style={{
            height: '100%',
            width: '100%',
            background: '#333',
            borderRadius: BORDER_RADIUS,
          }}
        >
          <Text color="white1">visual placeholder</Text>
        </Flex>
      ) : (
        <CPIMapIFrame />
      )}
    </View>
  )
}

function CPIMapIFrame() {
  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: BORDER_RADIUS }}
      loading="lazy"
      title="Felicity Office Location"
      allowFullScreen
      src={`https://goo.gl/maps/m8s8v4guSWk8Fgu38&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
    />
  )
}
