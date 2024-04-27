import { NotesItem } from "../../componets/NotesItem";
import { TextArea } from "../../componets/TextArea";
import { Markers } from "../../componets/Markers";
import { Seccao } from "../../componets/Seccao";
import { Button } from "../../componets/Button";
import { Header } from "../../componets/Header";
import { useNavigate } from "react-router-dom";
import { Input } from "../../componets/Input"
import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./styles";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";




export function NewNote() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    
    const [ links, setLinks] = useState([]);
    const [ newLink, setNewLink ] = useState("");
    
    const [ tags, setTags] = useState([]);
    const [ newTag, setNewTag ] = useState("");
    
    const navigate = useNavigate();


    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
        }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));

        }



    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
       
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !==  deleted));
     
    }

    async function handleNewNote(){
        if (!title) {
            return alert(" Digite o título do Filme")
        }
        
        if (newLink) {

            return alert("Você deixou uma link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        if (newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }



        await api.post("/notes", {
            title,
            description,
            tags,
            links
            
           
        });

        alert("Nota Criada com sucesso!");
        navigate("/");
    }  

    return (
    <Container>

        <Header />
        
        <main>
            <Form>
            <Link to={"/"}>
                <FiArrowLeft />
                   <p>
                    Voltar
                   </p>
                </Link>
                <header>
                    <h1>Novo filme</h1>
                </header>
                <div className="movie">
                    <Input 
                    placeholder = " Titulo"
                    onChange = {e => setTitle(e.target.value)}
                    />
                    <Input 
                    placeholder = " Sua nota (de 0 a 5)"
                    />
                </div>

                <TextArea 
                placeholder =" Observações"
                onChange = {e => setDescription(e.target.value)}
                />

                <Seccao title= "links úteis">
                    {
                        links.map((link, index) => (
                        <NotesItem 
                            key={String(index)}
                            value={link} 
                            onClick={() => handleRemoveLink(link)}
                    />
                    ) )
                    }
                    <NotesItem 
                    $isNew 
                    placeholder = " Novo link"
                    value={newLink} 
                    onChange={e => setNewLink(e.target.value)}
                    onClick={handleAddLink}
                    />
                        
                </Seccao>

               < Markers title="Marcadadores" > 
                   <div className="tags">
                    {
                        tags.map((tag, index) => ( 
                            <NotesItem 
                                key={ String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)}
                             />
                        ))
                    }
                       
                       <NotesItem 
                            $isNew 
                            placeholder = "Nova Filme"
                            onChange ={ e => setNewTag(e.target.value)} 
                            value={ newTag }
                            onClick={handleAddTag}
                        
                       />
                   </div>
               </Markers>
               <div className="butt">
                    
                    <Button  
            
                    title="Salvar" 
                    onClick={handleNewNote}
                     /> 
               </div>
            </Form>
        </main>
    </Container>

    )
}