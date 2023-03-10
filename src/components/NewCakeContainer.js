import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <h2>Cake Shop advanced</h2>
      <div>Number of cakes - {props.numOfCakes}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => props.buyCake(number)}>
          Buy {number} cakes
        </button>
      </div>
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
    buyCake: (number) => dispatch(buyCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
