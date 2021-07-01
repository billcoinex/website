import React from 'react';
import { PageContainer } from "../../components/style/style_index";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";

function CoinDetails(props) {

    return (
        <PageContainer>
            <Navbar {...props} style={{ position: "none !important"}}/>
            <Marginer direction="vertical" margin="8em"/>
            <Footer/>
        </PageContainer>
    );
}

export default CoinDetails;