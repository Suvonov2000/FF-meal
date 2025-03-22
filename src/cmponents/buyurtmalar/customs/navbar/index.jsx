import {
  Container,
  IconsWrapper,
  // MenuH,
  // MenuV,
  Tab,
  Title,
  Toggle,
  Wrapper,
  ToggleClone,
} from "./style";

import { LayoutGrid, TableProperties, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setMenu } from "../../../../redux/buyurtmalarSlice";

const Navbar = (props) => {
  const { menu, category } = useSelector(
    ({ buyurtmalarSlice }) => buyurtmalarSlice
  );
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper align="true" order={"first"}>
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
        <ToggleClone>
          <IconsWrapper
            active={menu === "menu-h"}
            onClick={() => {
              dispatch(setMenu("menu-h"));
            }}
            Stats
          >
            <LayoutGrid />
          </IconsWrapper>
          <IconsWrapper
            active={menu === "menu-v"}
            onClick={() => {
              dispatch(setMenu("menu-v"));
            }}
          >
            <TableProperties />
          </IconsWrapper>
        </ToggleClone>
      </Wrapper>
      <Wrapper order={"second"}>
        <Tab active={menu === "menu-v"}>
          <Tab.Item
            onClick={() => {
              dispatch(setCategory("yangi"));
            }}
            active={category === "yangi"}
          >
            Yangi
          </Tab.Item>

          <Tab.Item
            onClick={() => {
              dispatch(setCategory("qabul qilingan"));
            }}
            active={category === "qabul qilingan"}
          >
            Qabul Qilingan
          </Tab.Item>

          <Tab.Item
            onClick={() => {
              dispatch(setCategory("jonatilgan"));
            }}
            active={category === "jonatilgan"}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              dispatch(setCategory("yopilgan"));
            }}
            active={category === "yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align="true" order={"third"}>
        <Toggle>
          <IconsWrapper
            active={menu === "menu-h"}
            onClick={() => {
              dispatch(setMenu("menu-h"));
            }}
          >
            <LayoutGrid />
          </IconsWrapper>
          <IconsWrapper
            active={menu === "menu-v"}
            onClick={() => {
              dispatch(setMenu("menu-v"));
            }}
          >
            <TableProperties />
          </IconsWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
