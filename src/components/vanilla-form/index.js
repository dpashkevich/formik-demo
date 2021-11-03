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

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value)
  }

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`
      Logging in!
      email=${email}
      password=${password}
    `)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Please log in</Heading>

      <TextField label="Email" type="email" value={email} onChange={handleEmailChange} />
      <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} />

      <Button type="submit">Log in</Button>
    </Form>
  )
}
