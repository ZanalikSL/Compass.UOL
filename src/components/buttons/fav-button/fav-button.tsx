import { StarVector } from '../../../assets/star'
import './styles.scss'

const FavButton = ({ onClick }: any) => {
  return (
    <button className="fav-button" onClick={() => onClick}>
      <StarVector />
    </button>
  )
}

export default FavButton
