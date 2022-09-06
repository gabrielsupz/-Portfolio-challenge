import styled from 'styled-components'

export const RepoContainer = styled.div`
  width: 45.1rem;
  height: 18.6rem;
  flex-direction: column;
  background-color: var(--bg-cards);
  padding: 3rem;

  margin-right: 3rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  a {
    text-decoration: none;
    text-align: center;
    padding: 0.5rem 0.8rem 0.8rem 0.8rem;

    border-radius: 7px;

    border-radius: 7px;
    font-weight: 700;
    font-size: 1.6rem;
    transition: 0.5s;
  }

  a:hover {
    transition: 0.5s;
    background-color: #383647;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
  }
`

export const NameProject = styled.div`
  gap: 1.7rem;
  margin-bottom: 2rem;
  align-items: center;
`
