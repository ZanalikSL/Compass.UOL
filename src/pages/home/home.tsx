import { useNavigate } from 'react-router-dom'
import HomeBody from '../../components/home/home-body/home-body'
import HomeFooter from '../../components/home/home-footer/home-footer'
import HomeHeader from '../../components/home/home-header/home-header'
import { useAuth } from '../../context/auth-provider'

import './styles.scss'

const Home = () => {
  let auth = useAuth()
  let navigate = useNavigate()

  return (
    <div className="home-container">
      <HomeHeader />
      <HomeBody />
      <HomeFooter
        onClickAcessar={() => navigate('/search')}
        onClickLogout={() => auth.signout(() => navigate('/'))}
      />
    </div>
  )
}

export default Home
