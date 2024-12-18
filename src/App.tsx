import { BrowserRouter } from "react-router";
import Router from "./routes";
import GlobalStyle from "./styles/global";

const App:React.FC = () => {
  return (
    <>
  <BrowserRouter>
   <Router/>
  </BrowserRouter>
  <GlobalStyle/>
  </>
)};
export default App;
