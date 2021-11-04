import { Formik, Form } from 'formik'

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

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
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
