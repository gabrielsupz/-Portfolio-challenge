import styled from 'styled-components'

export const Main = styled.main`
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div#projects {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  @media screen and (max-width: 929px) {
    div#projects {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    div.infoProject {
      display: flexbox;
      gap: 2rem;
    }
  }

  div {
    color: var(--text-color);
    display: flex;

    border-radius: 2rem;
  }

  div h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 3rem 0 3rem 3rem;
  }

  div ul {
    align-items: center;
    justify-content: space-between;
  }
  div.projects {
    width: 95%;
    display: flex;
    gap: 4rem;
    background-color: var(--body-bg-color);
    margin-bottom: 3rem;
  }
  div.infoProject {
    margin-top: 3rem;
    margin-bottom: 3rem;
    justify-content: space-between;
    width: 100%;
  }

  div.infoGitHub {
    align-items: center;
    gap: 1.6rem;
  }
  div.infoGitHub div {
    gap: 0.8rem;
  }

  div.projectTec {
    align-items: center;
    gap: 1rem;
  }
  p.elipseCSS {
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 100%;
    background: #9747d1;
    border: 2px solid #837e9f;
  }
  p.HTML {
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 100%;
    background: #a01717;
    border: 2px solid #837e9f;
  }
  p.JavaScript {
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 100%;
    background: #d1c761;
    border: 2px solid #837e9f;
  }
`

export const MyProject = styled.div`
  @media screen and (max-width: 425px) {
    max-width: 35rem;

    width: 100%;
  }

  margin-right: 0;
  margin-bottom: 2rem;
  width: 95%;
  height: 8.6rem;

  align-items: center;
  justify-content: space-between;

  list-style: none;
  color: var(--text-color);
  background-color: var(--bg-cards);
  a {
    font-size: 1.4rem;
    margin-right: 3rem;

    line-height: 1.3rem;
    text-align: center;

    padding: 0.8rem 0.5rem 0.7rem 0.8rem;

    border-radius: 7px;
    transition: 0.5s;
  }
  a:hover {
    background-color: #383647;
    transition: 0.5s;
  }
`
export const Message = styled.div`
  @media screen and (max-width: 425px) {
    max-width: 35rem;

    width: 100%;
  }
  background-color: var(--bg-cards);
  width: 95%;
  height: 8.6rem;
  margin-bottom: 3rem;
`
export const TextMessage = styled.div`
  @media screen and (max-width: 425px) {
    margin: 0 0 4rem 0;
    flex-direction: column;
    align-items: center;
    max-width: 35rem;

    width: 100%;
  }
  @media screen and (max-width: 929px) {
    width: 95%;
    height: auto;
    margin: 0 0 4rem 0;
    flex-direction: column;
    align-items: center;
  }
  background-color: var(--bg-cards);
  width: 95%;
  height: 20.1rem;
  padding: 3rem;
  gap: 2rem;
  margin-bottom: 3rem;

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
  img.messagePic {
    width: 12.8rem;
    height: 12.8rem;

    border: 2px solid;
    border-radius: 100%;
  }

  p strong {
    font-size: 1.6;
    font-weight: 700;
  }
`
