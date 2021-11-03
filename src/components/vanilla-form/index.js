import { useState } from 'react'
import styled from 'styled-components'

import { TextField } from 'components/core/text-field'
import { Button } from 'components/core/button'

const Form = styled.form`
    background: white;
    color: #333;
    padding: 2em 4em;
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
`

const Heading = styled.div`
    font-size: 32px;
    margin-bottom: 20px;
`

export const VanillaForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value)
  }

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value)
  }

  const getErrors = () => {
    const newErrors = {}

    if (!email) {
      newErrors.email = "Email can't be blank."
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      newErrors.email = 'Email is invalid.'
    }

    if (!password) {
      newErrors.password = "Password can't be blank."
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = getErrors()
    setErrors(newErrors)

    if (!Object.keys(newErrors).length) {
      alert([
        'Logging in!',
        `email=${email}`,
        `password=${password}`
      ].join('\n'))
    }
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Heading>Please log in</Heading>

      <TextField label="Email" type="email" error={errors.email} value={email} onChange={handleEmailChange} />
      <TextField label="Password" type="password" error={errors.password} value={password} onChange={handlePasswordChange} />

      <Button type="submit">Log in</Button>
    </Form>
  )
}
