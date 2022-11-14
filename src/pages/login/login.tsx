import { CompassLogo } from '../../assets/compass-logo'
import LoginForm from '../../components/Form/loginForm'
import Greetings from '../../components/Greetings/greetings'

import './styles.scss'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-container__form">
        <Greetings
          title={'Olá,'}
          text={
            'Para continuar navegando de forma segura, efetue o login na rede.'
          }
        />
        <LoginForm />
      </div>
      <div className="login-container__image">
        <div className="login-container__logo">
          <CompassLogo />
        </div>
      </div>
    </div>
  )
}

export default Login
