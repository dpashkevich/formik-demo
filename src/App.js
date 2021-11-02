// import './App.css'
import styled from 'styled-components'

import { VanillaForm } from './components/vanilla-form'

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
`

function App() {
  return (
    <Container>
       <VanillaForm />
    </Container>
  );
}

export default App;
