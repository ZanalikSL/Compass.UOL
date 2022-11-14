import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SearchVector } from '../../assets/search-vector'

import './styles.scss'

type Inputs = {
  input: string
}

const Input = ({ setGithubUser }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setGithubUser(data.input)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-form">
        <input
          {...register('input', { required: true })}
          placeholder="Ex.: Thauany"
          className="input-form__input"
          type="text"
        />
        {errors.input && <p role="alert">Insira um Usuario</p>}
        <button type="submit" className="input-form__button">
          <span>Buscar</span> <SearchVector />
        </button>
      </div>
    </form>
  )
}

export default Input
