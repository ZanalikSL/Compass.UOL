import { ShareVector } from '../../../assets/share-vector'
import './styles.scss'

const ShareButton = ({ onClick }: any) => {
  return (
    <button className="share-button" onClick={() => onClick}>
      <ShareVector />
    </button>
  )
}

export default ShareButton
