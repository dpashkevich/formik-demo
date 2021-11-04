import { Formik, Form } from 'formik'
 import * as Yup from 'yup'

import { TextField } from 'components/form/text-field'
import { Button } from 'components/core/button'
import { Container } from 'components/form/container'
import { Heading } from 'components/form/heading'

export const FormikForm = () => {
  const handleSubmit = (values) => {
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
        {formik => (
          <Form>
            <Heading>Please log in</Heading>

            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />

            <Button type="submit">Log in</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
