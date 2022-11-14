import './styles.scss'

interface IHomeFooter {
  onClickAcessar: () => void
  onClickLogout: () => void
}
const HomeFooter = ({ onClickAcessar, onClickLogout }: IHomeFooter) => {
  return (
    <div className="footer-container">
      <div className="footer-container__text">
        <p>
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
          janela para continuar a navegar.
        </p>
      </div>

      <div className="footer-container__app">
        <div className="footer-container__time">
          <p>
            Application <br />
            refresh in
          </p>
          <span className="footer-container__clock">
            600
            <p>seconds</p>
          </span>
        </div>
        <div className="footer-container__buttons">
          <div className="footer-button__buscar" onClick={onClickAcessar}>
            Acessar <br />
            Busca
          </div>
          <div className="footer-button__logout" onClick={onClickLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
