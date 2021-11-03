import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
`

const LabelText = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
`

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 46px;
  padding: 10px 14px;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: normal;
  background: #ffffff;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  appearance: none;
`

export const TextField = ({label, ...props}) => (
  <Container>
    <Label>
      <LabelText>{label}</LabelText>
      <Input {...props} />
    </Label>
  </Container>
)
