
import { Container, Profile, Place, Logout } from "./styles";
import { RiShutDownLine} from "react-icons/ri";
import { Input } from "../../componets/Input";
import { useAuth } from "../../hooks/auth";
import { FiSearch } from "react-icons/fi";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Header() {

    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


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
            
            
            <Place>
                <Input placeholder = "Pesquisar pelo Título" icon={ FiSearch }/>
            </Place>

            
                    
                    <h2  >
                        RocketMovies
                    </h2>

                
            
                <Logout to = {"/"} onClick = { signOut }>
                    <RiShutDownLine />
                 </Logout>
        </Container>
    )
}