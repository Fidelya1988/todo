import "./App.css";
import Content from "./Components/Content/Content";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App" style= {{height: "100wh"}}>
        <Content />
      </div>
    </Provider>
  );
}

export default App;
