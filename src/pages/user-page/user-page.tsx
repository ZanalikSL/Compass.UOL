import UserInfo from '../../components/user-info/user-card'
import Navbar from '../../components/navbar/navbar'
import UserRepositoryCard from '../../components/user-repository-card/user-repository-card'

import userImage from '../../assets/image-placeholder-2.png'
import { ArrowDownVector } from '../../assets/arrow-down-vector'

import './styles.scss'
import Button from '../../components/buttons/button/button'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'
import { useNavigate } from 'react-router-dom'

const UserPage = () => {
  const { usersRepos, setUsersRepos } = useContext(UserContext)
  const [githubData, setGithubData] = useState<any[]>([])
  let navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [usersRepos])

  const fetchData = async () => {
    const response = await fetch(usersRepos)
    const data = await response.json()
    setGithubData(data)
  }

  return (
    <div className="user-page">
      <div className="user-page__container">
        <UserInfo
          image={githubData[0]?.owner.avatar_url}
          name={githubData[0]?.owner.login}
          text={githubData[0]?.owner.login}
        />
        <div className="user-page__container-main">
          <div className="user-page__repository">
            <Navbar repoNumber={githubData?.length} />
            <div className="user-page__user-card">
              {githubData &&
                githubData.map((data, i) => {
                  return (
                    <div key={i}>
                      <UserRepositoryCard data={data} />
                    </div>
                  )
                })}
            </div>
            <div className="user-page__button">
              <span>Ver mais repositórios</span> <ArrowDownVector />
            </div>
          </div>
        </div>
        <div className="user-page__button-back">
          <Button
            text={'Voltar'}
            variant="back_button"
            onClick={() => navigate('/search')}
          />
        </div>
      </div>
    </div>
  )
}

export default UserPage
