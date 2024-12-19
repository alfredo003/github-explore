import React, { FormEvent, useState } from "react";
import { Form, Title, Repositories } from "./style";
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../assets/github_explore.svg";
import {api} from "./../services/api";
interface Repository
{
  full_name:string;
  description:string;
  owner:{
    login:string;
    avatar_url:string;
  };
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event:FormEvent<HTMLFormElement>):Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`/repos/${newRepo}`)
    
    const repository = response.data;
 
    setRepositories([...repositories,repository]);
    setNewRepo('');
  }
  return (
    <>
      <img src={logoImg} alt="" />
      <Title>Explore repositorios no GitHub!</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          value={newRepo}
          onChange={(e)=>setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository=>(
            <a key={repository.full_name} href="test">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description} </p>
              </div>
              <FiChevronRight size={20} />
            </a>
          )
        )
        }
       
      </Repositories>
    </>
  );
};

export default Dashboard;
