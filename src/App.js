import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { VanillaForm } from 'components/vanilla-form'
import { Navigation } from 'components/navigation'

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
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
            <VanillaForm />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
