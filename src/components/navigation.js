import { NavLink as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
`

const Item = styled.li`
  list-style: none;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`

const Link = styled(RouterLink)`
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 0.5em;

  &.selected {
    background: white;
    color: #333;
  }
`

export const Navigation = () => (
  <Container>
    <Item>
      <Link exact to="/" activeClassName="selected">Vanilla Form</Link>
    </Item>
    <Item>
      <Link to="/formik" activeClassName="selected">Formik Form</Link>
    </Item>
  </Container>
)
