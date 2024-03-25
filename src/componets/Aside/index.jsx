import { Container, Navbar, Add  } from "./styles";

import { FiPlus } from "react-icons/fi";

export function Aside() {
    return (
        <Container>
            <Navbar>
                <div>
                    <h2>
                    Meus filmes
                    </h2>
                
                    <Add to={"/new"}>
                       <FiPlus/>
                       Adicionar filme
                    </Add>
                 
                </div>
            </Navbar>

        </Container>
           
              
            
        
        
    )
}