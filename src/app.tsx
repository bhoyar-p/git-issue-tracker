import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import RepoSearch from './components/repo-search';
import React, { createContext, useReducer } from 'react';
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./components/login";
// import { initialState, reducer } from "./reducers";

// function render() {
//   ReactDOM.render(<RepoSearch />, document.body);
// }

// render();

const root = createRoot(
  document.body
);
root.render(<App />);

function App() {
  return (
    <div>
      <HashRouter>
        <div className="App">
          <div className="menu">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
          </div>
          <Switch>
            <Route exact path="/" component={RepoSearch} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
};




{/* <Router>
      <Routes>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <RepoSearch />
        </Route>
      </Routes>
    </Router> */}

// export const AuthContext = createContext({});

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch
//       }}
//     >
//       <Router>
//         <Routes>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/">
//             <RepoSearch />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthContext.Provider >
//   );
// }
