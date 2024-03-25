import { Container } from "./styles";
import { Header } from "../../componets/Header";
import { Aside } from "../../componets/Aside";
import { Section } from "../../componets/Section";


export function Home() {
    return (
        <Container>
            <Header />

            <Aside />

            <Section />
            <Section />
            <Section />
           
        </Container>

    )
}