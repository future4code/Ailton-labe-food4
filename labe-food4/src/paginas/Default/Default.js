import React from "react";
import { Container, ContainerLogo } from "./Style";
import logo from "../../assets/logo-future-eats.png"


const Default = () => {

    return (
        
            <Container>
                <ContainerLogo src={logo} alt="logo" />
            </Container>
        
    )
}

export default Default