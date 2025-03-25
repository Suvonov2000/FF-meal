import { useSelector } from "react-redux";
import { MenuV } from "../menu-v";

const Body = () => {
  const { menu, category } = useSelector(
    ({ buyurtmalarSlice }) => buyurtmalarSlice
  );
  return <div>{menu === "menu-v" ? <MenuV /> : <MenuV />}</div>;
};

export default Body;
