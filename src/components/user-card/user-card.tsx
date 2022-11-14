import { useNavigate } from 'react-router-dom'
import Button from '../buttons/button/button'
import './styles.scss'

interface IUserCard {
  image: string
  name: string
  text: string
}

const UserCard = ({ image, name, text }: IUserCard) => {
  let navigate = useNavigate()

  return (
    <div className="user-card__container">
      <div className="user-card__user">
        <img src={image} alt="Imagem do usuário" className="user-card__image" />
        <div className="user-card__user_name">
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </div>

      <Button text={'VER MAIS'} onClick={() => navigate('/user')} />
    </div>
  )
}

export default UserCard
