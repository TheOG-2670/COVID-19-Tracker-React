export default function SelfAssessmentPage() 
{
    var lessCommonSymptoms=['aches and pains', 
                            'sore throat', 
                            'diarrhoea', 
                            'conjunctivitis', 
                            'headache', 
                            'loss of taste or smell', 
                            'a rash on skin, or discolouration of fingers or toes'],

        moreCommonSymptoms=['fever', 'dry cough', 'tiredness']
    return (
        <div className="container mt-3">
            <h4>
                Symptoms and Severity    
            </h4>
            <hr/>

            <div className='bg-secondary text-white p-3' style={{borderRadius: '10px'}}>
                <h4>
                    Less common:
                </h4>
                <ul>
                    {
                        lessCommonSymptoms.map(symptom=>
                            <li>{symptom}</li>
                        )
                    }
                </ul>
            </div>
            <br/>
            <br/>

            <div className='text-white p-3' style={{backgroundColor:'salmon', borderRadius: '10px'}}>
                <h4>
                    More common:
                </h4>
                <ul>
                    {
                        moreCommonSymptoms.map(symptom=>
                            <li>{symptom}</li>
                        )
                    }
                </ul>
            </div>
            <br/>
            <br/>

            <div className='text-white p-3' style={{backgroundColor:'#930000', borderRadius: '10px'}}>
                <h4>
                    Severe:
                </h4>
                <ul>
                    <li>
                        <strong><u>difficulty breathing</u></strong> or <strong><u>shortness of breath</u></strong>
                    </li>
                    <li>
                        <strong><u>chest pain</u></strong> or <strong><u>pressure</u></strong>
                    </li>
                    <li>
                        <strong><u>loss of speech</u></strong> or <strong><u>movement</u></strong>
                    </li>
                </ul>
            </div>

            <br/>
            <br/>
            <p>
                <strong>Credits:</strong> Google
            </p>
        </div>
    )
}