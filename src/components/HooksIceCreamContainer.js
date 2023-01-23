import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/index";

const HooksIceCreamContainer = (props) => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Ice cream Shop New</h2>
      <div>Number of iceCream - {numOfIceCreams}</div>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice cream</button>
    </>
  );
};

export default HooksIceCreamContainer;
