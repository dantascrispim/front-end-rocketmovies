import { Container, Links, Content} from "./styles";
import { Button } from "../../componets/Button";
import { Header } from "../../componets/Header";
import { useNavigate } from "react-router-dom";
import { Section } from "../../componets/Section";
import { Seccao } from "../../componets/Seccao";
import { api } from "../../services/api";
import { Tag } from "../../componets/Tag"
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { ButtonText } from "../../componets/ButtonText";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";



export function Details() {

  const [data, setDate] = useState(null);

  const params = useParams();
  const navigate = useNavigate();


  function handleBack(){
    navigate(-1);
  }
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente excluir a nota?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      
      navigate(-1);
    }

  }
  

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setDate(response.data);
    }

    fetchNote()

  }, []);
  
  return (
    <Container>
      <Header />
      
      
      {
        data &&
        <Content>

          <ButtonText 
          title="Excluir nota" 
          onClick={handleRemove}
          />
          <h1>
            {data.title}
          </h1>

          <p>
            {data.description}
          </p>
          
        
       { 
       data.links &&
       <main>
         <Seccao title="Links úteis" />
          <Links>
           {
            data.links.map(link => (
            <li key={String(link.id)}>
              <a href={link.url} target="_blanck">
                {link.url}
              </a>
              </li>
            ))
            }
          </Links>
          <Seccao/>
       </main>
        }

         {
          data.tags &&
          <Section  
          title="Marcadores" >
          {
            data.tags.map(tag => (
              <Tag  
              key={String(tag.id)}
              title={tag.name} 
              />
            ))
          
          }
          </Section> 
          }
          
      
      
        <Link  >
        <Button title="Voltar"
        onClick={handleBack} />
        </Link>
        </Content>
        }
     
    </Container>
    )
}