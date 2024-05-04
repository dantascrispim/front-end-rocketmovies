import { ButtonText } from "../../componets/ButtonText";
import { Container, Menu, Place } from "./styles";
import { Section } from "../../componets/Section";
import { Header } from "../../componets/Header";
import { useNavigate } from "react-router-dom";
import { Input } from "../../componets/Input";
import { Aside } from "../../componets/Aside";
import { Note } from "../../componets/Note"
import { FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
    
    
    const navigate = useNavigate();
    
    
    
    function handleTagSelected(tagName) {
        if(tagName === "all"){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName);

       if (alreadySelected){
        const filteredTags = tagsSelected.filter(tag => tag !== tagName);
        setTagsSelected(filteredTags);

       } else {

           setTagsSelected(prevState => [...prevState, tagName])

       }   

    }
    
    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }
        fetchTags()

    }, []);

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data);
        }     
        
        fetchNotes()
    }, [tagsSelected, search ]);

    function handleDetails(id){

        navigate(`/details/${id}`);

    }

    return (
        <Container>
            <Header />

            <Aside />
            
            <Place>
                <Input
                    placeholder = "Pesquisar pelo Título"
                    icon={ FiSearch }
                    onChange={(e) => setSearch(e.target.value)}
                    />
            </Place>
            
                
           
            
            <Menu>
            <li>
                <ButtonText 
                title="Todos" 
                onClick={() => handleTagSelected("all")}
                $isactive={tagsSelected.length === 0 }
                />
            </li >
               { 
                tags && tags.map(tag =>(
                   <li key={ String(tag.id)}>
                    <ButtonText 
                    title={tag.name} 
                    onClick={() => handleTagSelected(tag.name)}
                    $isactive={tagsSelected.includes(tag.name)}
                    />
                   </li>
                ))
               
               }

            </Menu>
            
        <Section title= "Minhas Notas">
            {
                notes.map(note => ( 
                <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}

                />
            ))
            }
        </Section>
        
       
        </Container>

    )
}