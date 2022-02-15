import styled, { keyframes } from 'styled-components'

export const FloatingLabel = styled.label`
  font-size: 16px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors['text-white']};
  pointer-events: none;
  position: absolute;
  transform: translate(-8px, 10px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  &.active {
    transform: translate(-8px, -8px) scale(0.75);
  }
  &:focus {
    color: ${({ theme }) => theme.colors['text-primary']};
  }
`

export const FloatingInput = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors['text-white']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 35px;
  padding: 15px 2px 15px;
  outline: 0;
  font-size: 16px;
`

export const FloatLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  position: relative;
  margin: 10px 0;

  &:focus-within ${FloatingLabel} {
    transform: translate(-8px, -8px) scale(0.75);
    color: ${({ theme }) => theme.colors['text-primary']};
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

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerLogin = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  & > div {
    height: 80%;
    width: 40%;
  }

  & > div:first-child {
    background: ${({ theme }) => theme.colors.secondary};
  }

  & > div:last-child {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['text-dark']};
    z-index: 1;
  }
`

export const CustomCheckbox = styled.label`
  color: ${({ theme }) => theme.colors['text-primary']};
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
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:hover input ~ span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & input:checked ~ span {
    background-color: ${({ theme }) => theme.colors.primary};
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
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const AlignComplements = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors['text-primary']};

  &:hover {
    opacity: 0.9;
  }
`

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['text-white']};
  padding: 8px 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 10px 0;
  background: ${({ theme }) => theme.colors.primary};
`

const waveAnimation = keyframes`
  from{
    transform: translateX(-100px);
  }
`

export const ContainerWaves = styled.div`
  position: relative;
  width: 100%;
`

export const Wave = styled.svg`
  width: 110%;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;

  & > .wave-1 {
    animation: ${waveAnimation} 3s ease-in-out infinite alternate;
  }
  & > .wave-2 {
    animation: ${waveAnimation} 3s 0.7s ease-in-out infinite alternate;
  }
  & > .wave-3 {
    animation: ${waveAnimation} 3s 1.5s ease-in-out infinite alternate;
  }
`
