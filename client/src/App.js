import React, { useState, useEffect } from "react";
import BasicTable from "./components/table";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSurveys } from "./services/profileService";

function App() {
  const [surveys, setSurveys] = useState(null);

  useEffect(() => {
    // Implement the request to get addresses from database (getsurveys is just an example)
    async function getSurveys() {
      if (!surveys) {
        const response = await getAllSurveys();
        setSurveys(response);
      }
    }
    // const fakesurveys = [
    //   { _id: "1", title: "Household Survey 2022", question_1: "How many members in your household?", question_2: "What is your main source of income?", question_3: "How many individuals work in your household", question_4: "What does your daily diet look like?"},
    //   // { _id: "2", title: "Conflict Qualitative Questionnaire", question_1: "Are there any resource based conflicts in your area?", question_2: "Did the project have any impact on these localised disputes?", question_3: "Did the project address the conflict concerns of women?", question_4:"Did the project increase access to resources in the community?"},
    //   // { _id: "3", title: "Crop Yield Assessment", question_1: "What is your role?", question_2: "How many acres do you farm or manage?", question_3: "What crop species do you plant?", question_4: "What is the biggest challenge you faced this season?"},
    // ];

    // setSurveys(fakesurveys);
    getSurveys();
  }, [surveys]);

  const renderSurveys = (survey) => {
    const {_id,title,question_1,question_2,question_3,question_4} = survey
    return (
      <li key={_id}>
        <h3>
          {`${title} 
          `}
        </h3>
        <p>{question_1}</p>
        <p>{question_2}</p>
        <p>{question_3}</p>
        <p>{question_4}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {surveys && surveys.length > 0 ? (
          surveys.map((profile) => renderSurveys(profile))
        ) : (
          <p>Faisa was here</p>
            // <BasicTable></BasicTable>
        )}
      </ul>
    </div>
  );
}

export default App;
