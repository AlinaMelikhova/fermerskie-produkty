import React, { useState } from "react";
import { Form, Label } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import { TitleSize } from "/src/components/ui/title/title";
import {
  BuyWrapper,
  FormWrapper,
  StyleTitle,
  FormItem,
  CheckboxMark,
  StyleTextInput,
  PriceLabel,
  Price
} from "./styles";

// страница покупки
function Buy({ buyOptions, selectedIDs, setSelectedIDs, handleChange }) {
  const [address, setAddress] = useState("");

  // TODO: переписать sum на .reduce
  // const sum = selectedIDs.reduce( ... )
  console.log(selectedIDs);
  const totalPrice = selectedIDs.reduce(
    (sum, product) => sum + product.price,
    0
  );

  // TODO: оставить либо price либо sum
  const isButtonEnable = selectedIDs && address;

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы приобрели ${selectedIDs.length} продукта.
              Общая стоимость: ${totalPrice} руб.`
    );
  };

  return (
    <BuyWrapper>
      <FormWrapper $bottom={18}>
        <StyleTitle level={4} size={TitleSize.EXTRA_SMALL}>
          Выберите продукты
        </StyleTitle>
        <Form>
          {buyOptions.map((option, index) => {
            const isChecked = selectedIDs.some((id) => id === option.id);
            return (
              <FormItem
                key={option.id}
                onClick={(key, index) => {
                  // TODO: переделать на тернарное выражение
                  let newSelectedIDS = [];
                  if (isChecked) {
                    newSelectedIDS = selectedIDs.filter(
                      (id) => id !== option.id
                    );
                  } else {
                    newSelectedIDS = [...selectedIDs, option.id];
                  }
                  setSelectedIDs(newSelectedIDS);
                  handleChange(key, index);
                }}
                // onChange={(key) => handleChange(key, index)}
              >
                <Label>
                  {option.description}
                  {/* // TODO: переделать чекбокс аналогично примеру */}
                  <CheckboxMark $isChecked={isChecked} />
                </Label>
              </FormItem>
            );
          })}
        </Form>
      </FormWrapper>
      <FormWrapper>
        <StyleTitle level={4} size={TitleSize.EXTRA_SMALL}>
          Сделать заказ
        </StyleTitle>
        <Form>
          <StyleTextInput
            minWidth={314}
            placeholder={"Введите адрес доставки"}
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
          />
          <PriceLabel>Цена</PriceLabel>
          <Price>{totalPrice}</Price>
          <Button disabled={!isButtonEnable} minWidth={314} onClick={handleBuy}>
            Купить
          </Button>
        </Form>
      </FormWrapper>
    </BuyWrapper>
  );
}

export default Buy;
