import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { styled } from '@config/stitches'

import { Text, Button, Grid, TextField, Container, TextArea } from '@components'
import { TouchableOpacity } from '@components/Button'
import { textStyles } from '@components/Text'
import { contact, ContactFields } from 'utils/api'

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFields>({ mode: 'onTouched' })

  const router = useRouter()

  return (
    <Container size="medium" css={{ p: '$5' }}>
      <ContactUsHeader>Contact Us</ContactUsHeader>
      <Text>
        We want to provide you a great experience which is why we want to hear
        from you. Your feedback helps us cater the events you love and services
        you expect.
      </Text>

      <FormGrid
        as="form"
        onSubmit={handleSubmit((values) => {
          contact(values).then(() => router.push('/thank-you'))
        })}
      >
        <Grid flow={{ '@initial': 'row', '@desktop': 'column' }} gap="4">
          <TextField
            placeholder="First Name"
            variant="flushed"
            {...register('firstName', {
              required: 'Please fill out this field',
            })}
            error={errors.firstName?.message}
          />
          <TextField
            placeholder="Last Name"
            variant="flushed"
            {...register('lastName', {
              required: 'Please fill out this field',
            })}
            error={errors.lastName?.message}
          />
        </Grid>

        <TextField
          placeholder="Email"
          variant="flushed"
          {...register('email', {
            required: 'Please fill out this field',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Please fill in a valid email',
            },
          })}
          error={errors.email?.message}
        />
        <TextArea
          placeholder="Message"
          rows={7}
          {...register('message', { required: 'Please fill out this field' })}
          error={errors.message?.message}
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
    </Container>
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
