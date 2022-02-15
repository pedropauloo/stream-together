import styled from 'styled-components'

export const FloatingLabel = styled.label`
  font-size: 16px;
  padding: 0 12px;
  color: ${(props) => props.theme.colors['text-white']};
  pointer-events: none;
  position: absolute;
  transform: translate(-8px, 10px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  &.active {
    transform: translate(-8px, -8px) scale(0.75);
  }
  &:focus {
    color: ${(props) => props.theme.colors['text-primary']};
  }
`

export const FloatingInput = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors['text-white']};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  width: 100%;
  height: 35px;
  padding: 15px 2px 15px;
  outline: 0;
  font-size: 16px;
`

export const FloatLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  margin: 10px 0;

  &:focus-within ${FloatingLabel} {
    transform: translate(-8px, -8px) scale(0.75);
    color: ${(props) => props.theme.colors['text-primary']};
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px;

  h1 {
    margin-bottom: 25px;
    font-size: 24px;
  }
`

export const ContainerLogin = styled.div`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  div {
    height: 80%;
    width: 40%;
  }

  div:first-child {
    background: ${(props) => props.theme.colors.secondary};
  }
  div:last-child {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors['text-dark']};
  }
`

export const CustomCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: ${(props) => props.theme.colors.gray};
  }

  &:hover input ~ span {
    background-color: ${(props) => props.theme.colors.primary};
  }

  & input:checked ~ span {
    background-color: ${(props) => props.theme.colors.primary};
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    top: 1px;
    left: 4px;
    width: 3px;
    height: 7px;
    border: solid ${(props) => props.theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
