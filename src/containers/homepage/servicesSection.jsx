import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Join Africa's largest cryptocurrency exchange</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi tellus eros, elementum sed augue nec, sodales porta ante. Curabitur dictum sed risus quis dignissim. 
        Nunc vulputate dolor vel tellus egestas, ac luctus neque pharetra. In nec viverra nibh, pharetra lobortis nunc. Nulla facilisi. In placerat, felis eu mollis viverra, sem massa viverra nunc, eget ultrices mauris metus gravida orci. 
        Proin magna lacus, blandit id nulla pellentesque, eleifend malesuada metus"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Mobile optimized"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi tellus eros, elementum sed augue nec, sodales porta ante."
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality is our priority"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi tellus eros, elementum sed augue nec, sodales porta ante. Curabitur dictum sed risus quis dignissim. 
        Nunc vulputate dolor vel tellus egestas, ac luctus neque pharetra."
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
