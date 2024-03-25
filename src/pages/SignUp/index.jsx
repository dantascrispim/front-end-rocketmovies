import { Input } from "../../componets/Input";
import { FiMail, FiLock, FiUser} from "react-icons/fi";
import { Button } from "../../componets/Button";
import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

export function SignUp() {
    return(
        <Container>
            
            <Background />
            <Form>
                
                <h1>
                RocketMovies
                </h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>
                Crie sua conta
                </h2>

                <Input 
                placeholder = "Nome"
                type = "text"
                icon={ FiUser }
                />

                <Input 
                placeholder = "E-mail"
                type = "text"
                icon={ FiMail }
                />

                <Input 
                placeholder = "Senha"
                type = "password"
                icon={ FiLock }
                />

            <Button title={"Cadastrar"} />

                <Link to={"/"}> Voltar para o login</Link>
            
            </Form>
            
            
        </Container>
    )
}