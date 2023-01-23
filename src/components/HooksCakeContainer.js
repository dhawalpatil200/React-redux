import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>New Cake Shop hooks</h2>
      <div>Number of cakes - {numOfCakes}</div>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </>
  );
};

export default HooksCakeContainer;
