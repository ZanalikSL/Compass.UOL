import React, { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import './styles.scss'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
  variant?: 'user_card' | 'back_button' | 'login_form__button' | 'error__button'
  active?: boolean
  loading?: boolean
  disabled?: boolean
}

const classes = {
  user_card: 'user-card__button',
  back_button: 'back__button',
  login_form__button: 'login-form__button',
  error__button: 'error__button',
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'user_card',
      children,
      active = true,
      loading = false,
      disabled = false,
      text = '',
      ...rest
    } = props

    const classesName = cn(
      {
        [classes.user_card]: variant === 'user_card',
        [classes.back_button]: variant === 'back_button',
        [classes.login_form__button]: variant === 'login_form__button',
        [classes.error__button]: variant === 'error__button',
      },
      className
    )

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        {...rest}
      >
        {text}
      </button>
    )
  }
)

export default Button
