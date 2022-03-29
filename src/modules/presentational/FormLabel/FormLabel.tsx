import { FormLabelContainer } from './Styles'
import { ComponentType } from 'react'
import { Typography, TypographyProps } from '@mui/material'

type FormLabelProps = {
  text: string
  typographyProps?: TypographyProps
}

const FormLabel: ComponentType<FormLabelProps> = ({ text, typographyProps, children }) => {
  return (
    <FormLabelContainer>
      <Typography variant="body1" {...typographyProps}>
        {text}
      </Typography>

      {children}
    </FormLabelContainer>
  )
}

export default FormLabel
