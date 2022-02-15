import { FloatingLabel } from './FloatingLabel'
import { CustomCheckbox } from './CustomCheckbox'
import { ContainerLogin, LoginForm } from './styles'

const Login = () => {
  return (
    <ContainerLogin>
      <div>
        <LoginForm action="">
          <h1>Login</h1>
          <FloatingLabel
            name="email"
            type="email"
            id="email-address"
            placeholder="Email"
          />
          <FloatingLabel
            name="senha"
            type="password"
            id="current-password"
            placeholder="Senha"
          />

          <CustomCheckbox label="Lembrar-me" id="remember-me" name="remember" />

          <a href="#">Esqueci minha senha</a>

          <input type="submit" value="Entrar" />
          <p>
            Não possui uma conta? <a href="#">Registre-se</a>
          </p>
        </LoginForm>
      </div>
      <div>
        <h1>asdsd</h1>
      </div>
    </ContainerLogin>
  )
}

export default Login
