import { Provider } from "react-redux";
import { Index, store } from "../Config";
function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
