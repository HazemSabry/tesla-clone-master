import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container id="Home">
      <Section
        title="Model S"
        description="Oreder Online For Touchlees Delirvery"
        backgroundImg="/images/model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Oreder Online For Touchlees Delirvery"
        backgroundImg="/images/model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      
      />
      <Section
        title="Model 3"
        description="Oreder Online For Touchlees Delirvery"
        backgroundImg="/images/model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Oreder Online For Touchlees Delirvery"
        backgroundImg="/images/model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar panels in America"
        description="Money-back gurantee"
        backgroundImg="/images/solar-panel.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Solar for  New Roofs"
        description="Solar Roof Costs Less than a New Roof Plus Solar Panels"
        backgroundImg="/images/solar-roof.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        leftButtonText="Shop now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
