import React from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";

import BackgroundImg from "../../assets/pictures/blx_bbimg.jpg";
import {Marginer} from "../../components/marginer";
import {Button} from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Navbar } from "../../components/navbar";
import { TableComp } from "../../components/table";

const TopConintainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    position: relative;
`;
const BackgroundFilter = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(53, 53, 53, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const MotivationText = styled.h1`
    text-align: center;
    font-size: 34px;
    font-weight: 500;
    color: #fff; 
    line-height: 1.4;
    margin: 0;
`;
const DownArrowContainer = styled.div`
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
`;

export function TopSection(props) {
    const scrollToNextSection = () => {
        scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
      };
    return (
        <Element name="topSection">
            <TopConintainer>
                <BackgroundFilter>
                    <Navbar />
                    <Marginer direction="vertical" margin="4em"/>
                    <MotivationText>Buy and Sell Crypto Instantly</MotivationText>
                    <Marginer direction="vertical" margin="4em"/>
                    <Button>Signup now</Button>
                    <Marginer direction="vertical" margin="4em"/>
                    <TableComp/>
                    <DownArrowContainer onClick={scrollToNextSection}>
                        <DownArrow />
                    </DownArrowContainer>
                </BackgroundFilter>
            </TopConintainer>
        </Element>  
       
    )
}