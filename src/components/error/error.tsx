import Button from '../buttons/button/button'
import './styles.scss'

export interface IErroPage {
  errorCod: string
  text: string
  buttonText: string
  onClick: any
}

const Error = ({ errorCod, text, buttonText, onClick }: IErroPage) => {
  return (
    <div className="error__container">
      <h2>{errorCod}</h2>
      <p>{text}</p>
      <Button variant="error__button" text={buttonText} onClick={onClick} />
    </div>
  )
}

export default Error
