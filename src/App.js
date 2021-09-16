import "./App.css";
import Content from "./Components/Content/Content";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
