import { Container } from "./styles";

export function Button({title, isNew, loading = false, ...rest}) {
    return ( 
   <Container 
     type="button"
     readOnly = { !isNew }
     { ...rest }
   >
    
        { loading ? 'Carregando...'  : title }
   </Container>
   
   )
}