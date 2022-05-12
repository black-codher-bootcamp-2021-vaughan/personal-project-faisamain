import React, {useState, useCallback} from 'react';
import Mysurveyone from '../surveyTypes/surveytypeone'

const SurveyOne = ()=>{ 
    const [showPage, setShowPage] = useState(true)
    const onCompletePage = useCallback((data)=>{
        setShowPage(!showPage)
    },[showPage])

    const setFinalPage = ()=>{
        return (
            <div className="divsubmitted">
         <h1 className="h1submitted">Your Survey has been Submitted</h1>
            </div>
        )
        }
  return(
    
    <div className="surveyonediv">
     {
     showPage?
    <Mysurveyone showCompletedPage={data=>onCompletePage(data)} />:
    setFinalPage()
     }
    </div>
)

}

export default SurveyOne;