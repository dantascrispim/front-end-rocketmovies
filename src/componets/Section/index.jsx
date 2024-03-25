
import { Container } from "./styles";
import { Tag } from "../Tag";
import { Titulo } from "../Titulo";


export function Section() {
    return (  
    <Container>

        
        <main>
            <div>
                <h3>
                Interestellar
                </h3>
            
            
                <p>
                    Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de
                    data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
                    anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta
                </p>
                <span>
                   <Tag title = "Ficção Cientifica" />
                   <Tag title = "Drama" />
                   <Tag title = "Família" />
                </span>
            </div>
        </main>
        
    </Container>

)

}