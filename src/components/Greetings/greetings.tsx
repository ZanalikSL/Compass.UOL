import './styles.scss'

interface IGreetings {
  title: string
  text: string
}

const Greetings = ({ title, text }: IGreetings) => {
  return (
    <div className="greetings-container">
      <div className="greetings-container__text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Greetings
