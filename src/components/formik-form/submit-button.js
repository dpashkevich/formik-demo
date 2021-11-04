import { Button } from 'components/core/button'
import { useFormikContext } from 'formik'

export const SubmitButton = ({children, ...props}) => {
  const { isSubmitting } = useFormikContext()

  return (
    <Button
      {...props}
      type="submit"
      disabled={isSubmitting}
    >
      { isSubmitting ? 'Submitting...' : children }
    </Button>
  )
}
