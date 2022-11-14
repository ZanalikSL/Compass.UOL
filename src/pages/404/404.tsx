import { useNavigate } from 'react-router-dom'
import Error from '../../components/error/error'

import './styles.scss'

const Error404 = () => {
  let navigate = useNavigate()

  return (
    <div className="error-page__container">
      <Error
        errorCod={'404'}
        text={
          'Esta página não existe.  Vamos encontrar um lugar melhor para você ir.'
        }
        buttonText={'Voltar para página inicial'}
        onClick={() => navigate('/')}
      />
    </div>
  )
}

export default Error404
