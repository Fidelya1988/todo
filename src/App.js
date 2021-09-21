import Content from "./Components/Content/Content";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Content />
      </div>
    </Provider>
  );
}

export default App;
