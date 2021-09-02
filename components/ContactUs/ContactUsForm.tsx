import { useForm } from 'react-hook-form'

import { styled } from '@config/stitches'

import { Text, Button, Grid, TextField, Container, TextArea } from '@components'
import { TouchableOpacity } from '@components/Button'
import { textStyles } from '@components/Text'

interface FormFields {
  fname: string
  lname: string
  email: string
  message: string
}

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ mode: 'onTouched' })

  return (
    <Container size="medium" css={{ p: '$5' }}>
      <ContactUsHeader>Contact Us</ContactUsHeader>
      <Text>
        We want to provide you a great experience which is why we want to hear
        from you. Your feedback helps us cater the events you love and services
        you expect.
      </Text>

      <FormGrid as="form" onSubmit={handleSubmit(() => alert('congrats'))}>
        <Grid flow={{ '@initial': 'row', '@desktop': 'column' }} gap="4">
          <TextField
            placeholder="First Name"
            variant="flushed"
            {...register('fname', { required: 'Please fill out this field' })}
            error={errors.fname?.message}
          />
          <TextField
            placeholder="Last Name"
            variant="flushed"
            {...register('lname', { required: 'Please fill out this field' })}
            error={errors.lname?.message}
          />
        </Grid>

        <TextField
          placeholder="Email"
          variant="flushed"
          {...register('email', {
            required: 'Please fill out this field',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
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
          type="button"
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
