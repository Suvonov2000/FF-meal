import { useSelector } from "react-redux";

const Body = () => {
  const { menu, category } = useSelector(
    ({ buyurtmalarSlice }) => buyurtmalarSlice
  );
  return (
    <div>
      {menu} {category}
    </div>
  );
};

export default Body;
