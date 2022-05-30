const json = {

    "title": "Household Survey",
    "description": "Complete All Questions",

    "elements": [
        {
            "name": "question1",
            "type": "text",
            "title": "How many members are in your household?",
            "placeHolder": "e.g. 5",
            "isRequired": true,
            
        }, {
            "name": "question2",
            "type": "text",
            "inputType": "date",
            "title": "What is the date you moved to your current house?",
            "isRequired": true,
            
        }, {
            "name": "question3",
            "type": "text",
            "title": "What is your main source of income?",
            "placeHolder": "e.g. Factory work",
            "isRequired": true,
          
        }, {
            "name": "question4",
            "type": "text",
            "title": "How many individuals work in your household?",
            "placeHolder": "e.g. 2",
            "isRequired": true,
            
        },{
            "name": "question5",
            "type": "text",
            "title": "What does your main meal consist of?",
            "placeHolder": "e.g. egg and salad",
            "isRequired": true,
           
        },{
            "name": "question6",
            "type": "text",
            "title": "What is the biggest challenge your househols faced this year?",
            "placeHolder": "e.g. not enough income",
            "isRequired": true,
            
        },
        // {
        //     "name": "question7",
        //     "type": "text",
        //     "title": "How many children are of school-age in your household?",
        //     "placeHolder": "e.g. 3",
        //     "isRequired": true,
            
        // },
        // {
        //     "name": "question8",
        //     "type": "text",
        //     "title": "Have you struggled to get enough nutrients in the past year?",
        //     "placeHolder": "e.g. yes, protein",
        //     "isRequired": true,
            
        // },
    ]
};

export default json;