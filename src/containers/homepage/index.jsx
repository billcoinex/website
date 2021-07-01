import React from "react";
import { TopSection } from "./topsection";
import { ServicesSection } from "./servicesSection";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { Footer } from "../../components/footer";
import { PageContainer } from "../../components/style/style_index";

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