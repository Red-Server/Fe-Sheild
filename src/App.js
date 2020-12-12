import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./Pages/SecureYourself/Chat";

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Chat} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
