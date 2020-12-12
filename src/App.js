import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./Pages/Home/Home";
import Chat from "./Pages/GetMentor/Chat";
import Attachments from "./Pages/GetMentor/Attachments";

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/getmentor/chat/" component={Chat} />
        <Route exact path="/getmentor/attachments/" component={Attachments} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
