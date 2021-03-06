import { Formik, Form } from 'formik'
 import * as Yup from 'yup'

import { TextField } from 'components/form/text-field'
import { Container } from 'components/form/container'
import { Heading } from 'components/form/heading'

import { SubmitButton } from './submit-button'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const FormikForm = () => {
  const handleSubmit = async (values) => {
    await sleep(300)

    alert([
      'Logging in!',
      `email=${values.email}`,
      `password=${values.password}`
    ].join('\n'))
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid.').required("Email can't be blank."),
    password: Yup.string().required("Password can't be blank.")
  })

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          <Heading>Please log in</Heading>

          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />

          <SubmitButton>Log in</SubmitButton>
        </Form>
      </Formik>
    </Container>
  )
}
