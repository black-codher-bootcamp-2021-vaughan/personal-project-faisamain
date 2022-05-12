import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/dashboard/Navbar";
import Sidebar from "./components/dashboard/Sidebar";
import SurveyOne from "./components/surveyDisplay/surveyone";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSurveys } from "./services/profileService";

 //4th


//  class Routes extends Component {
//   render() {

  // function App () {
  //   return (
  //     <div>
  //       <h1>Hi</h1>;
  //       <BrowserRouter basename="/React">
  //         <Switch>
  //           <Route path="/signup" component={Signup} />
  //           <Route path="/login" component={Login} />
  //           <Route path="/dashboard" component={Dashboard} />
  //           <Route exact path="/" component={Home} />
  //         </Switch>
  //       </BrowserRouter>
  //     </div>
  //   );
  // }


function App() {
  const [surveys, setSurveys] = useState(null);
  


  //user login info

  useEffect(() => {
    // Implement the request to get addresses from database (getsurveys is just an example)
    async function getSurveys() {
      if (!surveys) {
        const response = await getAllSurveys();
        setSurveys(response);
      }
    }
    
    getSurveys();
  }, [surveys]);

 

  const renderSurveys = (survey) => {
    const {_id,title,question_1,question_2,question_3,question_4} = survey
    return (
      <div key={_id}>
        {/* <h3>
          {`${title} 
          `}
        </h3> */}
        <></>
        {/* <p>{question_1}</p>
        <p>{question_2}</p>
        <p>{question_3}</p>
        <p>{question_4}</p> */}

        <BrowserRouter>
          <Switch>

            <Route path="/surveys" render={props =>
            <div>
              {/* <Navbar /> */}
              <SurveyOne />
            </div>
            }/>

            <Route path="/login" render={props =>
            <div>
              <Login />
              <Navbar />
            </div>
            } />

            <Route path="/dashboard" component={Navbar}/>
            <Route exact path="/" component={Signup}/>
          </Switch>
        </BrowserRouter>
      </div>
      
    );
  };

  return (
    <>
      <div>
        {surveys && surveys.length > 0 ? (
          surveys.map((profile) => renderSurveys(profile))
        ) : (
          <>
          <BrowserRouter>
          <Switch>
            {/* <Redirect from="/" to="/Login" exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Navbar} />
            <Route exact path="/" component={Home} /> */}
          </Switch>
        </BrowserRouter>
        </>
  
        )}
      </div>
      </>
    
  );
}


export default App;
// export default Routes;
