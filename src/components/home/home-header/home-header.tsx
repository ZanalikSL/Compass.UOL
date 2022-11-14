import { CompassLogoBlack } from '../../../assets/compass-logo-black'

import './styles.scss'

const HomeHeader = () => {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <CompassLogoBlack />
      </div>
      <div className="header-container__date">
        <h1>11:26 </h1>
        <p>terça-feira, 17 de março de 2020</p>
      </div>
      <div className="header-container__temp">
        <h6>Passo Fundo - RS</h6>
        <p>22º</p>
      </div>
    </div>
  )
}

export default HomeHeader
