import React from "react";
import { Form, Title, Repositories } from "./style";
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../assets/github_explore.svg";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="" />
      <Title>Explore repositorios no GitHub!</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/59560615?v=4"
            alt="Alfredo Manuel"
          />
          <div>
            <strong>Alfredo003/angola</strong>
            <p>easy peasy highly scalable react.js </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/59560615?v=4"
            alt="Alfredo Manuel"
          />
          <div>
            <strong>Alfredo003/angola</strong>
            <p>easy peasy highly scalable react.js </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/59560615?v=4"
            alt="Alfredo Manuel"
          />
          <div>
            <strong>Alfredo003/angola</strong>
            <p>easy peasy highly scalable react.js </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
