
import { FiArrowLeft, FiPlus, FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../componets/Button";
import { Input } from "../../componets/Input";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to={ "/" }>
                <FiArrowLeft />
                   <p>
                    Voltar
                   </p>
                </Link>
            </header>
            <Form>
               <Avatar>
                <img src="https://github.com/dantascrispim.png" alt="Foto do usuário" />
               
               <label htmlFor="avatar">
               <FiCamera />
               

               <input id="avatar"
               type="file" />
               </label>
               </Avatar>
            <Input 
                placeholder = "Name"
                type = "text"
                icon={ FiUser }
                />

            <Input 
                placeholder = "E-mail"
                type = "text"
                icon={ FiMail }
                /> 
            <Input 
                placeholder = "Senha atual"
                type = "password"
                icon={ FiLock}
                />  
            <Input 
                placeholder = "Nova senha"
                type = "password"
                icon={ FiLock}
                />      

            <Button title={ "Salvar" }/>
            </Form>

        </Container>

    )
}
