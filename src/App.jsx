import { BrowserRouter } from "react-router-dom";
import Page from "./Pages";
import { Global } from "./style";

function App() {

  return (
      <BrowserRouter>
        <Global />
        <Page />
      </BrowserRouter>
  );
}

export default App;
