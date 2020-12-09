import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { User } from "./pages";
import { Change } from "./pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/changedata">
            <Change />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
