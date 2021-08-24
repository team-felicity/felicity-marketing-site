import Image from 'next/image'
import { Text, View, Grid, Flex, Link } from '@components'

export default function Footer() {
  return (
    <View
      css={{
        width: '100%',
        backgroundColor: '#F5F5F6',
        position: 'relative',
        bottom: 0,
        paddingTop: 50,
        paddingBottom: 30,
      }}
    >
      <Grid
        flow={{
          '@phone': 'row',
          '@desktop': 'column',
        }}
      >
        <Flex direction="row" justify="center">
          <Image src="/logo.svg" alt="logo" height={50} width={50} />
          <Text
            color="primary5"
            size="8"
            weight="bold"
            css={{
              '@desktop': { paddingTop: 35, paddingLeft: 20 },
            }}
          >
            FELICITY
          </Text>
        </Flex>

        <Grid flow="row" justify="center">
          <Text
            css={{
              paddingBottom: 20,
              '@phone': { textAlign: 'center' },
              '@desktop': { textAlign: 'start' },
            }}
          >
            Reach Out to us!
          </Text>
          <Flex direction="row">
            <Image src="/phone-call.svg" alt="phone" height={30} width={30} />
            <Text css={{ paddingLeft: 20 }}>+63 927 304 3415</Text>
          </Flex>
          <Flex direction="row" css={{ paddingTop: 10 }}>
            <Image src="/email.svg" alt="email" height={30} width={30} />
            <Text css={{ paddingLeft: 20 }}>Felicitycorp123@gmail.com</Text>
          </Flex>
        </Grid>

        <Flex direction="column" align="center">
          <Flex direction="column">
            <Text
              css={{
                paddingBottom: 20,
                '@phone': { textAlign: 'center' },
                '@desktop': { textAlign: 'start' },
              }}
            >
              Follow us on:
            </Text>
            <Flex direction="row" justify="center">
              <Link href="http://www.facebook.com">
                <Image src="/facebook.svg" alt="fb" height={50} width={50} />
              </Link>
              <Link href="http://www.facebook.comt">
                <Image src="/twitter.svg" alt="twttr" height={50} width={50} />
              </Link>
              <Link href="http://www.facebook.com">
                <Image
                  src="/instagram.svg"
                  alt="insta"
                  height={50}
                  width={50}
                />
              </Link>
              <Link href="http://www.facebook.com">
                <Image
                  src="/youtube.svg"
                  alt="youtube"
                  height={50}
                  width={50}
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </View>
  )
}
