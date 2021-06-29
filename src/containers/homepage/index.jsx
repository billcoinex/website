import React from "react";
import styled from "styled-components";
import { TopSection } from "./topsection";
import { ServicesSection } from "./servicesSection";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
width: 100% !important;
height: 100% !important;
display: flex;
flex-direction: column;
`;
function Homepage(props) {
    return (
        <PageContainer> 
        <TopSection {...props}/>
        <ServicesSection/>
        <Marginer direction="vertical" margin="2em" />
        <MoreAboutSection />
        <Marginer direction="vertical" margin="8em" />
        <Footer />
        </PageContainer>
    );
    
}

export default Homepage;