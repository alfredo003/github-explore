import styled from "styled-components";


export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
a{
    display: flex;
    align-items: center;
    color: #a8a8b3;
    text-decoration: none;

    &:hover{
        color: #333;
    }
}
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;
    li{
        & + li {
            margin-left:80px;
        }
        strong{
            display: block;
            font-size: 36px;
            color:#3d3d4d;
        }
        span{
            display: block;
            margin-top: 4px;
            color: #c6c6c6;
        }
    }
  }

`;

export const Issues = styled.div`
  margin-top: 60px;
  max-width: 700px;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
   

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbcb;
    }
  }
`;