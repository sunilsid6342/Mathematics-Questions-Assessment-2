import React, { useEffect, useState } from 'react'
import { MathJaxContext, MathJax } from 'better-react-mathjax'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home() {
    const [getQues, setQuest] = useState();
    const parmas = useParams();
    const ids = parmas.id

    const question1 = "AreaUnderTheCurve_901"
    const question3 = "DifferentialCalculus2_901"

    useEffect(() => {
        getFetchData();
    });



    const getFetchData = async () => {
        if (ids === undefined) {
            let result = await fetch("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_901", {
                method: "Get"
            });
            result = await result.json();
            console.log("Question Data - >", result[0].Question);
            setQuest(result[0].Question);
        } else {
            let result = await fetch("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=" + ids, {
                method: "Get"
            });
            result = await result.json();
            console.log("Question Data - >", result[0].Question);
            setQuest(result[0].Question);
        }

    }

    return (
        <div className='container mt-5 float-left'>
            <div className='row'>
                <div className='col-sm-2'>

                </div>
                <div className='col-sm-8 border'>
                    <div className="card mt-4">
                        <div className="card-header bg-dark text-white">
                            <h5>Question - {ids===undefined?"BinomialTheorem_901":ids}</h5>
                        </div>
                        <div className="card-body bg-white">
                            <h6 className="card-title" style={{fontSize: "20px",fontFamily: "emoji"}}> {getQues}</h6>
                        </div>
                    </div>
                    <div className='mt-2 ' style={{marginLeft:"75%",color:"#6c58bF"}}>
                    <nav aria-label="navigation">
                        <ul className="pagination ">
                            <li className="page-item "><Link className="bg-dark text-white page-link" to={"/"+question1}>Previous</Link></li>
                            <li className="page-item"><Link className="bg-dark text-white page-link" to={"/"}>Home</Link></li>
                            <li className="page-item"><Link className="bg-dark text-white page-link" to={"/"+ question3}>Next</Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
                <div className='col-sm-2'>

                </div>

            </div>
        </div>
    )
}

export default Home
