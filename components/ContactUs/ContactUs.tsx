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
import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

export default function ContactUs() {
  return (
    <Container size="large2">
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

const validationSchema = yup.object().shape({
  fname: yup.string().required('First Name is required'),
  lname: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
})
const initialValues = { fname: '', lname: '', email: '', message: '' }

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      initialErrors={{}} // default is adding error messages to all fields but it feels like the form is shouting at you
      onSubmit={() => {
        alert('congrats')
      }}
    >
      {({ errors, touched }) => {
        const getErrorMessage = (name: keyof typeof initialValues) =>
          touched[name] && errors[name] ? errors[name] : ''

        return (
          <Form>
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
                  <Field
                    as={TextField}
                    placeholder="First Name"
                    variant="flushed"
                    name="fname"
                    error={getErrorMessage('fname')}
                  />
                  <Field
                    as={TextField}
                    placeholder="Last Name"
                    variant="flushed"
                    name="lname"
                    error={getErrorMessage('lname')}
                  />
                </Flex>

                <Field
                  as={TextField}
                  placeholder="Email"
                  variant="flushed"
                  name="email"
                  error={getErrorMessage('email')}
                />
                <Field
                  as={TextField}
                  placeholder="Message"
                  variant="flushed"
                  name="message"
                  error={getErrorMessage('message')}
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
          </Form>
        )
      }}
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
