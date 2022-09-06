import React from 'react'
import * as S from './styled.js'

const Repo = ({ data }) => {
  return (
    <S.RepoContainer>
      <S.NameProject>
        <img src="../public/assets/folder.svg" alt="Ícon Folder" />
        <a href={data.link} target="blank">
          {data.name}
        </a>
      </S.NameProject>
      <p>{`${data.description}...`}</p>
      <div>
        <div className="infoProject">
          <div className="infoGitHub">
            <div>
              <img src="../public/assets/star-project.svg" alt="Ícon Star" />
              <p>{data.star}</p>
            </div>
            <div>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                stroke="#837E9F"
                fill="#302f3d"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <p>{data.fork}</p>
            </div>
          </div>

          <div className="projectTec">
            <p className={data.tecnologi}></p>
            <p>{data.tecnologi}</p>
          </div>
        </div>
      </div>
    </S.RepoContainer>
  )
}

export default Repo
