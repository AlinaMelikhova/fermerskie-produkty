import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import buyOptions from "/src/mocks/buyOptions";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import benefitList from "/src/mocks/benefitList";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import { GlobalStyle } from "./styles";
import { AppRoute } from "/src/const/";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              path={AppRoute.MAIN}
              element={<MainPage benefits={benefitList} />}
            />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
