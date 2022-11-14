import './styles.scss'

interface IUserInfo {
  image: string
  name: string
  text: string
}

const UserInfo = ({ image, name, text }: IUserInfo) => {
  return (
    <div className="user-info__container">
      <div className="user-info__user">
        <img src={image} alt="Imagem do usuário" className="user-info__image" />
        <div className="user-info__user_name">
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
