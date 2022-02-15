import { InputHTMLAttributes } from 'react'
import { CustomCheckbox as CheckInput } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  name: string
}

export const CustomCheckbox = (props: InputProps) => {
  const { label } = props
  return (
    <CheckInput>
      {label}
      <input type="checkbox" />
      <span></span>
    </CheckInput>
  )
}
