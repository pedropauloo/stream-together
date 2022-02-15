import { FloatingLabel } from './FloatingLabel'
import { CustomCheckbox } from './CustomCheckbox'
import {
  ContainerLogin,
  AlignComplements,
  LoginForm,
  Link,
  Button,
  ContainerWaves,
  Wave,
  LoginDiv,
} from './styles'

const Login = () => {
  return (
    <ContainerLogin>
      <LoginDiv>
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

          <AlignComplements>
            <CustomCheckbox
              label="Lembrar-me"
              id="remember-me"
              name="remember"
            />

            <Link href="#">Esqueci minha senha</Link>
          </AlignComplements>

          <Button type="submit"> Entrar </Button>
          <p>
            Não possui uma conta? <Link href="#">Registre-se</Link>
          </p>
        </LoginForm>
        <ContainerWaves>
          <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="wave-1"
              fill="#870ac2"
              fillOpacity="1"
              d="M0,128L30,112C60,96,120,64,180,58.7C240,53,300,75,360,96C420,117,480,139,540,122.7C600,107,660,53,720,32C780,11,840,21,900,58.7C960,96,1020,160,1080,170.7C1140,181,1200,139,1260,144C1320,149,1380,203,1410,229.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
            <path
              className="wave-2"
              fill="#9609D8"
              fillOpacity="1"
              d="M0,160L30,160C60,160,120,160,180,144C240,128,300,96,360,117.3C420,139,480,213,540,224C600,235,660,181,720,186.7C780,192,840,256,900,240C960,224,1020,128,1080,117.3C1140,107,1200,181,1260,202.7C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,6F0,320,30,320L0,320Z"
            ></path>
            <path
              className="wave-3"
              fill="#a10fe6"
              fill-opacity="1"
              d="M0,0L30,42.7C60,85,120,171,180,218.7C240,267,300,277,360,256C420,235,480,181,540,138.7C600,96,660,64,720,85.3C780,107,840,181,900,197.3C960,213,1020,171,1080,138.7C1140,107,1200,85,1260,80C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </Wave>
        </ContainerWaves>
      </LoginDiv>
      <div>
        <h1>asdsd</h1>
      </div>
    </ContainerLogin>
  )
}

export default Login
