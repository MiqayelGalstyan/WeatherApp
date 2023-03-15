import { Provider as StoreProvider } from "react-redux";
import store from "./store/index";

import BrowserRouter from "./Routes";

const App = (): JSX.Element => {
  return (
    <>
      <StoreProvider store={store}>
        <BrowserRouter />
      </StoreProvider>
    </>
  );
};

export default App;
