import React from "react";
import About from "/src/components/blocks/about/about";
import Benefits from "/src/components/blocks/benefits/benefits";
import benefitList from "/src/mocks/benefitList";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ benefits }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <Benefits benefits={benefitList} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
