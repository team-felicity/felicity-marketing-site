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
          <GridRow>
            <LocationMarkerIcon color="white" />
            <ContactsText>
              Holy Family Road, Nivel Hill Cebu City, 6000 Cebu
            </ContactsText>
          </GridRow>

          <ContactsHeader>Contacts</ContactsHeader>
          <GridRow>
            <DeviceMobileIcon color="white" />
            <ContactsText>(+63) 927 304 3415</ContactsText>
          </GridRow>
          <GridRow>
            <PhoneIcon color="white" />
            <ContactsText>(032) 414 1784</ContactsText>
          </GridRow>
          <GridRow>
            <MailIcon color="white" />
            <ContactsText
              css={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              felicityincorporate@gmail.com
            </ContactsText>
          </GridRow>
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
                  direction={{ '@initial': 'column', '@desktop': 'row' }}
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
  padding: '$6',
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

const GridRow = styled(View, {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '$2',
  gridTemplateColumns: '1.5rem 1fr',
})

const FlexCol = styled(Flex, {
  defaultVariants: {
    direction: 'column',
    gap: '7',
  },
})
