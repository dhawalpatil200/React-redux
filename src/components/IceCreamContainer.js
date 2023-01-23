import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

const IceCreamContainer = (props) => {
  return (
    <>
      <h2>Ice cream Shop old</h2>
      <div>Number of iceCream - {props.numOfIceCreams}</div>
      <button onClick={props.buyIceCream}>Buy Ice cream</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
