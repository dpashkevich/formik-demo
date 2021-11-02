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



export const VanillaForm = () => (
    <Form>
        <Heading>Please log in</Heading>

        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />

        <Button type="submit">Log in</Button>
    </Form>
)