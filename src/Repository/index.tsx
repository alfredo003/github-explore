import React from "react";
import { Link, useParams } from "react-router";
import { Header, Issues, RepositoryInfo } from "./style";
import logoImg from "../assets/github_explore.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Respository: React.FC = () => {
  const params = useParams();

  const repository = `${params["repository"]}/${params["*"]}`;

  return (
    <>
      <Header>
        <img src={logoImg} alt="github explore" />
        <Link to="/">
          {" "}
          <FiChevronLeft /> Voltar{" "}
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/59560615?v=4"
            alt=""
          />
          <div>
            <strong>alfredo003/minischell</strong>
            <p>Descricao do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1000</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link key="fg" to={`//`}>
          <strong>oooooooo</strong>
          <p>ppppppppppppp</p>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Respository;
