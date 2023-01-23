import { connect } from "react-redux";
import { buyCake } from "../redux/index";

const CakeContainer = (props) => {
  return (
    <>
      <h2>Cake Shop old</h2>
      <div>Number of cakes - {props.numOfCakes}</div>
      <button onClick={props.buyCake}>Buy cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
