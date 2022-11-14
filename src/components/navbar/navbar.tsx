import './styles.scss'

const Navbar = ({
  repoNumber,
  favNumber,
}: {
  repoNumber?: number
  favNumber?: number
}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-option">
        <h4>Repositórios</h4>
        <div className="navbar-container-option-number">{repoNumber}</div>
      </div>
      <div className="navbar-container-option">
        <h4>Favoritos</h4>
        <div className="navbar-container-option-number">{favNumber}</div>
      </div>
    </div>
  )
}

export default Navbar
