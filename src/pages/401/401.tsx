import { useNavigate } from 'react-router-dom'
import Error from '../../components/error/error'

import './styles.scss'

const Error401 = () => {
  let navigate = useNavigate()

  return (
    <div className="error-page__container">
      <Error
        errorCod={'401'}
        text={
          'Você precisa está logado para acessar essa pagina.  Vamos encontrar um lugar melhor para você ir.'
        }
        buttonText={'Voltar para página inicial'}
        onClick={() => navigate('/')}
      />
    </div>
  )
}

export default Error401
