import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth-provider'
import Button from '../buttons/button/button'
import { yupResolver } from '@hookform/resolvers/yup'

import * as Yup from 'yup'

import './styles.scss'

type Inputs = {
  usuario: string
  senha: string
}

const LoginForm = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let auth = useAuth()

  let from = location.state?.from?.pathname || '/'

  const schema = Yup.object().shape({
    usuario: Yup.string()
      .required()
      .matches(/(admin)/),
    senha: Yup.string()
      .required()
      .matches(/(admin)/),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: Inputs) =>
    auth.signin(data.usuario, data.senha, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page.
      navigate(from, { replace: true })
    })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form">
        <label className="login-form__label">Login</label>

        <div className="login-form__input-div">
          <input
            {...register('usuario')}
            placeholder="Usuário"
            className="login-form__input"
            type="text"
          />

          <input
            {...register('senha')}
            placeholder="Senha"
            className="login-form__input"
            type="password"
          />
        </div>

        {errors.senha && (
          <span className="login-form__error">
            Ops, usuário ou senha inválidos. Tente novamente!
          </span>
        )}

        {errors.usuario && (
          <span className="login-form__error">
            Ops, usuário ou senha inválidos. Tente novamente!
          </span>
        )}

        <Button type="submit" variant="login_form__button" text={'Continuar'} />
      </div>
    </form>
  )
}

export default LoginForm
