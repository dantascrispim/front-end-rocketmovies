
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Profile, Place, Logout } from "./styles";
import { RiShutDownLine} from "react-icons/ri";
import { Input } from "../../componets/Input";
import { useAuth } from "../../hooks/auth";
import { FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

export function Header() {

    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);
    const [ tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    
    const { signOut, user } = useAuth()
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    useEffect(() => {
       async function fetchNotes() {
        const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
        setNotes(response.data);
       }     
       
       fetchNotes()
    }, [tagsSelected, search]);

    return (
        <Container  >
            
                
            <Profile to = {"/profile"} >
                <img 
                    src= { avatarUrl } 
                    alt={ user.name } 
                />
                <div>
                    <strong>{ user.name }</strong>
                    <span >
                        sair
                    </span>
            
                </div>

            </Profile>
            
            
            

            
                    
                    <h2  >
                        RocketMovies
                    </h2>

                
            
                <Logout to = {"/"} onClick = { signOut }>
                    <RiShutDownLine />
                 </Logout>
        </Container>
    )
}