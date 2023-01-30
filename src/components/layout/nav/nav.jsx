import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledNav, StyledButton } from "./styles";
import { AppRoute } from "/src/const/";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </StyledNav>
  );
}

export default Nav;
