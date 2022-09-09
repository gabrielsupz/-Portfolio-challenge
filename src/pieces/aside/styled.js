import styled from 'styled-components'

export const Aside = styled.aside`
  @media screen and (max-width: 425px) {
    display: contents;
    flex-direction: column;

    background-color: var(--body-bg-color);
  }

  div {
    max-width: 35rem;
    width: 100%;

    color: var(--text-color);
    background-color: var(--bg-cards);
    display: flex;
    border-radius: 7%;

    margin-bottom: 3rem;
  }
  div h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 3rem 0 0 2rem;
  }
`
export const ProfileDiv = styled.div`
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 4.9rem;
  }

  img {
    width: 12.8rem;
    height: 12.8rem;
    left: 15rem;
    top: 7.2rem;
    margin-top: 3.2rem;

    margin-bottom: 3rem;

    background: url();
    border: 2px solid #00ff00;
    border-radius: 100%;
  }
`
export const ContactDiv = styled.div`
  a {
    text-decoration: none;
    color: var(--text-color);
  }
  ul {
    margin: 2rem 2rem 0 2rem;
    align-items: center;
    list-style: none;
  }

  ul li {
    display: flex;
    gap: 2rem;
    font-size: 1.3rem;
    font-weight: 400;
    align-items: center;
    margin-bottom: 3rem;
  }
  ul li#contactFrase {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
  }
`

export const TecDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 20.8rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  div.technologies {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: auto;
    margin: 0;
    align-items: center;
    padding-left: 2rem;
    color: var(--body-bg-color);
    margin-left: 0;

    transition: 0, 05s;
  }
  div.technologies a:hover {
    transition: 0, 5s;
    background-color: #383647;
    color: var(--text-color);
  }

  div.technologies a {
    text-decoration: none;
    background-color: var(--bg-techs);
    border-radius: 3rem;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3rem;
    text-align: center;

    padding: 0.6rem 0.4rem 0.6rem 0.4rem;
    width: 8.6rem;
    height: 2.4rem;
    align-items: center;
    margin-top: 1.5rem;
    color: black;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    div {
      margin: 0;
    }
    div.technologies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-area: auto;
    }
  }
`
export const ExpAndEducDiv = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin: 2rem 0rem 4rem 2rem;
    width: auto;
  }

  ul {
    list-style: none;
    font-size: 1.2rem;
  }
  ul strong.topic {
    font-size: 1.4rem;
    font-weight: 700;
  }
`
