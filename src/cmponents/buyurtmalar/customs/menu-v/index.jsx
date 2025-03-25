import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Dashboar,
  Length,
  Text,
  RestoreWrapper,
  Restore,
  RestoreButton,
  ButtonAll,
} from "./style";
import { card } from "../../../../mock/card";
import ProductCard from "../body/productCard";

export const MenuV = () => {
  const [data] = useState(card);

  return (
    <RestoreWrapper>
      <Container>
        <Wrapper>
          <Text>
            Yangi <Length>{card.yangi.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          <ProductCard />
        </Wrapper>
        <Wrapper>
          <Text>
            Qabul <Length>{card.qabul.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon2 />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          <ProductCard />
        </Wrapper>
        <Wrapper>
          <Text>
            Jo'natilgan <Length>{card.jonatilganlar.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon3 />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          <ProductCard />
        </Wrapper>
        <Wrapper>
          <Text>
            Yopilganlar <Length>{card.yopilgan.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon4 />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          <ProductCard />
        </Wrapper>
      </Container>
    </RestoreWrapper>
  );
};
export default MenuV;
