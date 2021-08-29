import { Formik, Field, Form } from 'formik'
import * as yup from 'yup'

import { styled } from '@config/stitches'

import { Text, View, Button, Grid, TextField, Container } from '@components'
import { TouchableOpacity } from '@components/Button'
import { textStyles } from '@components/Text'

const validationSchema = yup.object().shape({
  fname: yup.string().required('Please fill out this field'),
  lname: yup.string().required('Please fill out this field'),
  email: yup
    .string()
    .email('Please fill in a valid email')
    .required('Please fill out this field'),
  message: yup.string().required('Please fill out this field'),
})
const initialValues = { fname: '', lname: '', email: '', message: '' }

export default function ContactUs() {
  return (
    <View as="section">
      <Container size="medium" css={{ py: '$9' }}>
        <ContactUsHeader>Contact Us</ContactUsHeader>
        <Text>
          We want to provide you a great experience which is why we want to hear
          from you. Your feedback helps us cater the events you love and
          services you expect.
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          initialErrors={{}} // default is adding error messages to all fields but it feels like the form is shouting at you
          onSubmit={() => {
            alert('congrats')
          }}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => {
            const getErrorMessage = (name: keyof typeof initialValues) =>
              touched[name] && errors[name] ? errors[name] : ''

            return (
              <FormGrid as={Form}>
                <Grid
                  flow={{ '@initial': 'row', '@desktop': 'column' }}
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
                </Grid>

                <Field
                  as={TextField}
                  placeholder="Email"
                  variant="flushed"
                  name="email"
                  error={getErrorMessage('email')}
                />
                <TextField
                  as="textarea"
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  error={getErrorMessage('message')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  css={{ py: '$2', resize: 'vertical', height: 'unset' }}
                  rows={7}
                />
                <Button
                  type="submit"
                  size="large"
                  variant="primary"
                  as={TouchableOpacity}
                  radius="10"
                  css={{
                    mt: '$2',
                    width: '100%',
                    '@desktop': { width: '25%' },
                  }}
                >
                  Submit
                </Button>
              </FormGrid>
            )
          }}
        </Formik>
      </Container>
    </View>
  )
}

const FormGrid = styled(Grid, {
  borderRadius: '$10',
  mt: '$6',
  gap: '$4',
})

const ContactUsHeader = styled('h1', {
  ...textStyles,
  defaultVariants: {
    size: '9',
    color: 'primary6',
    weight: 'bold',
  },
})
