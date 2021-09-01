import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Error from "./components/Error";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainBody} />
        <Route exact path="/login" component={LogIn} />
        <Route exacat path="/signup" component={SignUp} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
