import React from "react";
import {
  InfoText,
  PriceWeight,
  CharacteristicsList,
  CharacteristicsItem,
  CharacteristicsPoint,
  CharacteristicsPointDescription
} from "./styles.js";

function CardDescription({ options }) {
  return (
    <>
      <InfoText>{options.info}</InfoText>
      <PriceWeight>
        {options.price} руб. / {options.weight} гр.
      </PriceWeight>
    </>
  );
}

function CardCharacteristics({ options }) {
  return (
    <CharacteristicsList>
      {options.map((option) => (
        // TODO: добавить key
        <CharacteristicsItem>
          <CharacteristicsPoint>{option.point}</CharacteristicsPoint>
          <CharacteristicsPointDescription>
            {option.pointInfo}
          </CharacteristicsPointDescription>
        </CharacteristicsItem>
      ))}
    </CharacteristicsList>
  );
}

function CardProperties({ options }) {
  return (
    <CharacteristicsList>
      {options.map((option) => (
        // TODO: добавить key
        <CharacteristicsItem>
          <CharacteristicsPoint>{option.point}</CharacteristicsPoint>
          <CharacteristicsPointDescription>
            {option.pointInfo}
          </CharacteristicsPointDescription>
        </CharacteristicsItem>
      ))}
    </CharacteristicsList>
  );
}

export { CardDescription, CardCharacteristics, CardProperties };
