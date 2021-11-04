import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

it('renders the login form', () => {
  render(<App />)
  expect(screen.getByText(/Please log in/i)).toBeInTheDocument()
  expect(screen.getByText(/Email/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument()
})

it('renders the navigation with Vanilla Form selected', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: 'Vanilla Form', current: 'page' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Formik Form' })).toBeInTheDocument()
})

const variants = [
  'Vanilla Form',
  'Formik Form'
]

variants.forEach((variant) => {
  describe(variant, () => {
    describe('login process', () => {
      let alertSpy

      beforeEach(() => {
        alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
        render(<App />)
        const variantLink = screen.getByRole('link', { name: variant })
        fireEvent.click(variantLink)
      })

      afterEach(() => {
        alertSpy.mockRestore()
      })

      const loginWith = async (email, password) => {
        const emailInput = screen.getByLabelText('Email')
        email && userEvent.type(emailInput, email)

        const passwordInput = screen.getByLabelText('Password')
        password && userEvent.type(passwordInput, password)

        const loginButton = screen.getByRole('button', {name: /Log in/i})
        await act(async () => {
          fireEvent.click(loginButton)
        })
      }

      describe('valid credentials', () => {
        it('logs me in', async () => {
          await loginWith('hello@example.com', '123')

          await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith(`Logging in!\nemail=hello@example.com\npassword=123`)
          })
        })
      })

      describe('invalid credentials', () => {
        it('rejects empty email', async () => {
          await loginWith('', '123')

          expect(screen.getByText("Email can't be blank.")).toBeInTheDocument()
          expect(alertSpy).not.toHaveBeenCalled()
        })

        it('rejects invalid email', async () => {
          await loginWith('abc', '456')

          expect(screen.getByText('Email is invalid.')).toBeInTheDocument()
          expect(alertSpy).not.toHaveBeenCalled()
        })

        it('rejects empty password', async () => {
          await loginWith('someone@example.com', '')

          expect(screen.getByText("Password can't be blank.")).toBeInTheDocument()
          expect(alertSpy).not.toHaveBeenCalled()
        })
      })
    })
  })
})

