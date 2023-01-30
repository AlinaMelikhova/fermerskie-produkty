import React, { useState } from "react";
import Catalog from "/src/components/blocks/catalog/catalog";
import Buy from "/src/components/blocks/buy/buy";
import { StyledSection } from "./styles";

function BuyPage({ buyOptions }) {
  const [selectedIDs, setSelectedIDs] = useState(() =>
    buyOptions.slice(0, 3).map((item) => item.id)
  );
  const [swiperRef, setSwiperRef] = useState(null);
  const handleChange = (id, index) => {
    if (!selectedIDs.includes(id)) {
      swiperRef.slideTo(index, 0);
    }
  };

  return (
    <StyledSection>
      <Buy
        buyOptions={buyOptions}
        selectedIDs={selectedIDs}
        setSelectedIDs={setSelectedIDs}
        handleChange={handleChange}
      />
      <Catalog buyOptions={buyOptions} setSwiperRef={setSwiperRef} />
    </StyledSection>
  );
}

export default BuyPage;
