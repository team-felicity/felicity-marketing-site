import {
  LocationMarkerIcon,
  PhoneIcon,
  DeviceMobileIcon,
  MailIcon,
} from '@heroicons/react/outline'
import { styled } from '@config/stitches'
import {
  Text,
  View,
  Button,
  Grid,
  TextField,
  Container,
  Flex,
} from '@components'
import { TouchableOpacity } from '@components/Button'
import { textStyles } from '@components/Text'
import { Formik } from 'formik'

export default function ContactUs() {
  return (
    <Container size="large">
      <OuterView as={Grid} flow={{ '@phone': 'row', '@desktop': 'column' }}>
        <ContactForm />
        <ContactsCotainer as={FlexCol}>
          <ContactsHeader>Office Address</ContactsHeader>
          <GridCol>
            <LocationMarkerIcon width="1.5rem" color="white" />
            <GridRow>
              <ContactsText>Holy Family Road, Nivel Hil</ContactsText>
              <ContactsText>Cebu City, 6000 Cebu</ContactsText>
            </GridRow>
          </GridCol>

          <ContactsHeader>Contacts</ContactsHeader>
          <FlexRow>
            <DeviceMobileIcon width="1.5rem" color="white" />
            <ContactsText>(+63) 927 304 3415</ContactsText>
          </FlexRow>
          <FlexRow>
            <PhoneIcon width="1.5rem" color="white" />
            <ContactsText>(032) 414 1784</ContactsText>
          </FlexRow>
          <FlexRow>
            <MailIcon width="1.5rem" color="white" />
            <ContactsText>Felicitycorp123@gmaisl.com</ContactsText>
          </FlexRow>
        </ContactsCotainer>
      </OuterView>
    </Container>
  )
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ fname: '', lname: '', email: '', message: '' }}
      validate={(values) => {
        const errors = { fname: '', lname: '', email: '', message: '' }
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        if (!values.fname) {
          errors.fname = 'Required'
        }
        if (!values.lname) {
          errors.lname = 'Required'
        }
        if (!values.message) {
          errors.message = 'Required'
        }
        return errors
      }}
      onSubmit={() => {
        alert('congrats')
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <ContactUsContainer size="small">
              <ContactUsHeader>Contact Us</ContactUsHeader>
              <Text>
                We want to provide you a great experience which is why we want
                to hear from you. Your feedback helps us cater the events you
                love and services you expect.
              </Text>
              <Flex
                direction={{ '@mobile': 'column', '@desktop': 'row' }}
                gap="4"
              >
                <TextField
                  placeholder="First Name"
                  variant="flushed"
                  name="fname"
                  onChange={handleChange('fname')}
                  value={values.fname}
                  error={errors.fname}
                />
                <TextField
                  placeholder="Last Name"
                  variant="flushed"
                  name="lname"
                  onChange={handleChange('lname')}
                  value={values.lname}
                  error={errors.lname}
                />
              </Flex>

              <TextField
                placeholder="Email"
                variant="flushed"
                name="email"
                onChange={handleChange('email')}
                value={values.email}
                error={errors.email}
              />
              <TextField
                placeholder="Message"
                variant="flushed"
                name="message"
                onChange={handleChange('message')}
                value={values.message}
                error={errors.message}
              />
            </ContactUsContainer>
            <Button
              type="submit"
              size="large"
              variant="primary"
              as={TouchableOpacity}
              radius="10"
              css={{ rt: 0, mt: '$2' }}
            >
              Submit
            </Button>
          </FormGrid>
        </form>
      )}
    </Formik>
  )
}

const OuterView = styled(View, {
  '@desktop': {
    borderRadius: 50,
    backgroundColor: '$white1',
    boxShadow: '1px 2px 6px 1px #D0D0D0',
    margin: '$4',
  },
})

const FormGrid = styled(Grid, {
  marginTop: '$7',
  marginBottom: '$7',
  borderRadius: '$10',
  boxShadow: '3px 3px 6px 1px #D0D0D0',
  paddingTop: '$6',
  '@desktop': {
    margin: '$7',
  },
})

const ContactUsContainer = styled(Container, {
  display: 'grid',
  gapy: '1.5rem',
  mb: '$6',
})

const ContactUsHeader = styled('h1', {
  ...textStyles,
  defaultVariants: {
    size: '8',
    color: 'primary6',
    weight: 'bold',
  },
})

const ContactsCotainer = styled(View, {
  backgroundColor: '$primary6',
  borderRadius: 50,
  paddingLeft: '$4',
  paddingTop: '$7',
  paddingBottom: '$7',
  margin: 0,
  '@desktop': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: '$9',
  },
})

const ContactsHeader = styled('h1', {
  ...textStyles,
  defaultVariants: {
    size: '6',
    color: 'white1',
    weight: 'bold',
  },
})

const ContactsText = styled('p', {
  ...textStyles,
  defaultVariants: {
    color: 'white1',
  },
})

const FlexRow = styled(Flex, {
  defaultVariants: {
    direction: 'row',
    gap: '4',
  },
})

const FlexCol = styled(Flex, {
  defaultVariants: {
    direction: 'column',
    gap: '7',
  },
})

const GridRow = styled(Grid, {
  defaultVariants: {
    flow: 'row',
    gap: '3',
  },
})

const GridCol = styled(Grid, {
  defaultVariants: {
    flow: 'column',
    justify: 'start',
    gap: '4',
  },
})
