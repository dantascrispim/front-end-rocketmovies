
import { Input } from "../../componets/Input";
import { Container, Profile, Place } from "./styles";
import { FiSearch } from "react-icons/fi";

export function Header() {
    return (
        <Container>
            <h2>
                RocketMovies
            </h2>
            <Place>
                <Input placeholder = "Pesquisar pelo Título" icon={ FiSearch }/>
            </Place>
            <Profile to = {"/profile"}>
                
                <div>
                    <strong>Dantas Crispim</strong>
                    <span>
                        sair
                    </span>
                </div>
            <img src="https://github.com/dantascrispim.png" alt="foto perfil do github" />

            </Profile>
        </Container>
    )
}