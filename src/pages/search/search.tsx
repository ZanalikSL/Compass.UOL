import { useContext, useEffect, useState } from 'react'

import Input from '../../components/Input/Input'
import UserCard from '../../components/user-card/user-card'
import { UserContext } from '../../context/user'

import { CompassLogo } from '../../assets/compass-logo'

import './styles.scss'

const Search = () => {
  const [githubData, setGithubData] = useState([
    { avatar_url: '', name: '', location: '' },
  ])
  const [githubUser, setGithubUser] = useState('')

  const { usersRepos, setUsersRepos } = useContext(UserContext)

  useEffect(() => {
    fetchData()
  }, [githubUser])

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${githubUser}`)
    const data = await response.json()
    setGithubData([
      {
        avatar_url: data.avatar_url,
        name: data.name,
        location: data.location,
      },
    ])
    setUsersRepos(data?.repos_url)
  }

  return (
    <div className="search-container">
      <div className="search-container__search">
        <div className="search-container__search-list">
          <div className="search-container__header">
            <h1>{'Busca'}</h1>
            <p>{'Para encontrar o usuário desejado digite seu nome abaixo.'}</p>
          </div>

          <div className="search-container__user-input">
            <Input setGithubUser={setGithubUser} />
          </div>

          <div className="search-container__user-card">
            {githubData[0].name &&
              githubData?.map((data) => (
                <UserCard
                  image={data?.avatar_url}
                  name={data?.name}
                  text={data?.location}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="search-container__image">
        <div className="search-container__logo">
          <CompassLogo />
        </div>
      </div>
    </div>
  )
}

export default Search
