import "./styles.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <div>
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <HooksIceCreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <ItemContainer />
        <hr />
        <ItemContainer cake />
        </div> */}
        <div>
          <UserContainer />
        </div>
      </div>
    </Provider>
  );
}
