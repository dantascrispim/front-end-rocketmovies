import { Container, Form } from "./styles";
import { Header } from "../../componets/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../componets/Input"
import { TextArea } from "../../componets/TextArea";
import { Markers } from "../../componets/Markers";
import { NotesItem } from "../../componets/NotesItem";
import { Button } from "../../componets/Button";
import { Link } from "react-router-dom";

export function NewNote() {

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
                    <Input placeholder = " Titulo"/>
                    <Input placeholder = " Sua nota (de 0 a 5)"/>
                </div>

                <TextArea placeholder =" Observações"/>

               < Markers title={"Marcadadores"} > 
                   <div className="tags">
                       <NotesItem  value = "React"/>
                       <NotesItem isNew placeholder = "Novo Marcador"/>
                   </div>
               </Markers>

               <div className="butt">
                    <Button  title="Excluir Filme" />
                    <Button isNew title="Salvar Alterações" /> 
               </div>
            </Form>
        </main>
    </Container>

    )
}