import { TextField as RawTextField } from 'components/core/text-field'
import { useField } from 'formik'

export const TextField = ({ label, ...props }) => {
  const [fieldProps, meta] = useField(props)

  return (
    <RawTextField
      label={label}
      error={meta.touched && meta.error ? meta.error : null}
      {...fieldProps}
      {...props}
    />
  )
}
