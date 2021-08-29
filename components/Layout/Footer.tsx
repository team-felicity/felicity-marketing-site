import Image from 'next/image'
import { Text, View, Grid, Flex, Link, Container } from '@components'
import { styled } from '@config/stitches'
import Facebook from 'public/facebook.svg'
import Instagram from 'public/instagram.svg'
import Twitter from 'public/twitter.svg'
import Youtube from 'public/youtube.svg'
import Email from 'public/email.svg'
import Phone from 'public/phone-call.svg'
import Logo from 'public/logo.svg'
import { textStyles } from '@components/Text'

export default function Footer() {
  return (
    <View
      as="footer"
      css={{
        backgroundColor: '$gray5',
        paddingTop: '$6',
        paddingBottom: '$6',
        marginTop: '$9',
      }}
    >
      <Container
        as={Grid}
        flow={{
          '@initial': 'row',
          '@desktop': 'column',
        }}
        size="large2"
        gap="3"
      >
        <FlexRow justify="center">
          <Image src={Logo} alt="logo" />
          <CompanyName>FELICITY</CompanyName>
        </FlexRow>

        <Grid flow="row" justify="center" gap="2">
          <FooterColumnTitle>Reach out to us!</FooterColumnTitle>
          <FlexRow gap="3">
            <Image src={Phone} alt="phone" />
            <Text>+63 927 304 3415</Text>
          </FlexRow>

          <FlexRow gap="3">
            <Image src={Email} alt="email" />
            <Text>Felicitycorp123@gmail.com</Text>
          </FlexRow>
        </Grid>

        <FlexCol align="center">
          <FlexCol>
            <FooterColumnTitle>Follow us on:</FooterColumnTitle>
            <FlexRow justify="center">
              <Link href="http://www.facebook.com" target="_blank">
                <Image src={Facebook} alt="fb" />
              </Link>
              <Link href="http://www.twitter.com" target="_blank">
                <Image src={Twitter} alt="twttr" />
              </Link>
              <Link href="http://www.instagram.com" target="_blank">
                <Image src={Instagram} alt="insta" />
              </Link>
              <Link href="http://www.youtube.com" target="_blank">
                <Image src={Youtube} alt="youtube" />
              </Link>
            </FlexRow>
          </FlexCol>
        </FlexCol>
      </Container>
    </View>
  )
}

function ContactInfo({ label }: { label: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      if (copied) setCopied(false)
    }, 2000)

    return () => clearTimeout(id)
  }, [copied])

  const handleClipboardClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(label)
  }

  return (
    <Flex
      justify="center"
      css={{ alignSelf: 'stretch', '&:hover button': { opacity: 1 } }}
    >
      <Text css={{ position: 'relative' }}>
        {label}
        <Button
          variant="ghost"
          css={{
            padding: '2px',
            height: 'unset',

            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '-2rem',

            opacity: 0,
          }}
          onClick={handleClipboardClick}
        >
          {copied ? (
            <ClipboardCheckIcon height="20px" width="20px" />
          ) : (
            <ClipboardIcon height="20px" width="20px" />
          )}
        </Button>
      </Text>
    </Flex>
  )
}

const FooterColumnTitle = styled(Text, {
  paddingBottom: 20,
  textAlign: 'center',
  '@desktop': { textAlign: 'start' },
})

const FlexRow = styled(Flex, {
  flexDirection: 'row',
})

const FlexCol = styled(Flex, {
  flexDirection: 'column',
})

const CompanyName = styled('h1', {
  ...textStyles,
  paddingTop: '$2',
  '@desktop': { paddingTop: '$6' },
  defaultVariants: {
    color: 'primary5',
    size: '8',
    weight: 'bold',
  },
})
