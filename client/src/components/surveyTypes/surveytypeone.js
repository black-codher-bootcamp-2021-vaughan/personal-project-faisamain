import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from '../surveys/questionone';

const Mysurveyone = (prop)=>{
    return(
        <div>
        <Survey.Survey
        showCompletedPage={false}
        onComplete={data=>prop.showCompletedPage(data.valuesHash)}
        json={Json}
        />
        </div>
    )
}

export default Mysurveyone;