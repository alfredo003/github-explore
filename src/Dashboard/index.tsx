import React, { FormEvent, useEffect, useState } from "react";
import { Form, Title, Repositories,Error } from "./style";
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../assets/github_explore.svg";
import { api } from "./../services/api";
import { Link } from "react-router";
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState("");
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(()=>{
    const storageRepositories = localStorage.getItem(
      "@githubexplore:repositories"
    );
    if(storageRepositories)
      return JSON.parse(storageRepositories);

  });

  useEffect(()=>{
    localStorage.setItem('@githubexplore:repositories',JSON.stringify(repositories));
  },[repositories])
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite o nome do repositorio");
      return;
    }
    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo("");
      setInputError("");
    } catch {
      setInputError("Erro na busca por essse repositorio");
    }
  }
  return (
    <>
      <img src={logoImg} alt="" />
      <Title>Explore repositorios no GitHub!</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description} </p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
