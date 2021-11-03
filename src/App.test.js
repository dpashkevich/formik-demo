import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

it('renders the login form', () => {
  render(<App />)
  expect(screen.getByText(/Please log in/i)).toBeInTheDocument()
  expect(screen.getByText(/Email/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
  expect(screen.getByRole('button', {name: /Log in/i})).toBeInTheDocument()
})

describe('login process', () => {
  let alertSpy

  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    render(<App />)
  })

  afterEach(() => {
    alertSpy.mockRestore()
  })

  const loginWith = (email, password) => {
    const emailInput = screen.getByLabelText('Email')
      fireEvent.change(emailInput, { target: { value: email } })
      const passwordInput = screen.getByLabelText('Password')
      fireEvent.change(passwordInput, { target: { value: password } })

      const loginButton = screen.getByRole('button', {name: /Log in/i})
      fireEvent.click(loginButton)
  }

  describe('valid credentials', () => {
    it('logs me in', () => {
      loginWith('hello@example.com', '123')

      expect(alertSpy).toHaveBeenCalledWith(`Logging in!\nemail=hello@example.com\npassword=123`)
    })
  })

  describe('invalid credentials', () => {
    it('rejects empty email', () => {
      loginWith('', '123')

      expect(screen.getByText("Email can't be blank.")).toBeInTheDocument()
      expect(alertSpy).not.toHaveBeenCalled()
    })

    it('rejects invalid email', () => {
      loginWith('abc', '456')

      expect(screen.getByText('Email is invalid.')).toBeInTheDocument()
      expect(alertSpy).not.toHaveBeenCalled()
    })

    it('rejects empty password', () => {
      loginWith('someone@example.com', '')

      expect(screen.getByText("Password can't be blank.")).toBeInTheDocument()
      expect(alertSpy).not.toHaveBeenCalled()
    })
  })
})
