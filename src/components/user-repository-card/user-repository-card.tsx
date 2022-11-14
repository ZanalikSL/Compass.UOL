import Button from '../buttons/button/button'
import FavButton from '../buttons/fav-button/fav-button'
import ShareButton from '../buttons/share-button/share-button'
import './styles.scss'

const UserRepositoryCard = ({ data }: any) => {
  const { name, description } = data
  return (
    <div className="card-container">
      <div className="card-user">
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      <div className="card-container__button">
        <FavButton />
        <span className="card-main__button">
          <Button
            text={'COMPARTILHAR'}
            onClick={() => console.log('Compartilhar')}
          />
        </span>
        <span className="card-secondary__button">
          <ShareButton />
        </span>
      </div>
    </div>
  )
}

export default UserRepositoryCard
