import { Provider as StoreProvider } from "react-redux";
import store from "./store/index";
import {Toaster} from 'react-hot-toast';

import BrowserRouter from "./Routes";

const App = (): JSX.Element => {
  return (
    <>
      <StoreProvider store={store}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              fontSize: "20px",
              maxWidth: "unset",
            },
            success: {
              style: {
                background: "green",
                color: "#ffffff",
              },
            },
            error: {
              style: {
                background: "red",
                color: "#ffffff",
              },
            },
          }}
          reverseOrder={false}
        />
        <BrowserRouter />
      </StoreProvider>
    </>
  );
};

export default App;
