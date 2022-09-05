import styled from "styled-components";

// kebab-case-case
// camelCaseCaseCase
// snake_case_case

// div.projects div.project
// div.projects div.header
// div.projects div.footer h1.my-title

// export const Projects = styled.div`
//   .project{
//   }
//   .header{
//   }
//   .footer{
//     h1.my-title {
//     }
//     #test{
//     }
//   }
// `

export const RepoContainer = styled.div`
  width: 45.1rem;
  height: 18.6rem;
  flex-direction: column;
  background-color: var(--bg-cards);
  padding: 3rem;
  img {
    width: 2rem;
    height: 2rem;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export const NameProject = styled.div`
  gap: 1.7rem;
  margin-bottom: 1rem;
  a {
    font-size: 1.6rem;
  }
`;

export const StartContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.test};
  ${(props) => (props.star ? "border: 1px solid yellow;" : "none")};
`;
