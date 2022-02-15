import { InputHTMLAttributes, useState } from 'react'
import {
  FloatingInput as Input,
  FloatingLabel as Label,
  FloatLabelContainer,
} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  type: string
  name: string
  placeholder: string
}

export const FloatingLabel = (props: InputProps) => {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('')
  const { placeholder } = props

  function handleTextChange(text: string) {
    setValue(text)

    if (text !== '') {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <FloatLabelContainer>
      <Input
        {...props}
        placeholder=""
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <Label className={isActive ? 'active' : ''}>{placeholder}</Label>
    </FloatLabelContainer>
  )
}
