import React from "react";

import './FAQ.css'
import '../../../style.css'
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const FAQ = () => {
	
	return (
		<>
		<Navbar />
		    {/* START OF MAIN */}
				<section className="main-section container">
        <div className="searchresults">
          <ul id="searchlist">
          </ul>
        </div>
        <section className="head-text">
          <h3>Help &amp; FAQs</h3>
        </section>
        <section className="question-wrapper">
          {/* first question card */}
          <div className="question-card ques-use">
            <div className="question-text">
              <h6>How much Produce can be purchased on the platform</h6>
            </div>
            <div className="question-icon">
              <button className="plus-btn" id="plus-btn-1"><i className="fa-solid fa-plus" /></button>
              <button className="minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="answer-text ques-use">
            <h6 className="answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</h6>
          </div>
          {/* second question card */}
          <div className="question-card ques-use">
            <div className="question-text">
              <h6>How much Produce can be purchased on the platform</h6>
            </div>
            <div className="question-icon">
              <button className="plus-btn" id="plus-btn-2"><i className="fa-solid fa-plus" /></button>
              <button className="minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="answer-text ques-use">
            <h6 className="answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</h6>
          </div>
          {/* Third question card */}
          <div className="question-card ques-use">
            <div className="question-text">
              <h6>How much Produce can be purchased on the platform</h6>
            </div>
            <div className="question-icon">
              <button className="plus-btn" id="plus-btn-3"><i className="fa-solid fa-plus" /></button>
              <button className="minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="answer-text ques-use">
            <h6 className="answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</h6>
          </div>
          {/* Fourth question card */}
          <div className="question-card ques-use">
            <div className="question-text">
              <h6>How much Produce can be purchased on the platform</h6>
            </div>
            <div className="question-icon">
              <button className="plus-btn" id="plus-btn-4"><i className="fa-solid fa-plus" /></button>
              <button className="minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="answer-text ques-use">
            <h6 className="answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</h6>
          </div>
          {/* Fifth question card */}
          <div className="question-card ques-use">
            <div className="question-text">
              <h6>How much Produce can be purchased on the platform</h6>
            </div>
            <div className="question-icon">
              <button className="plus-btn" id="plus-btn-5"><i className="fa-solid fa-plus" /></button>
              <button className="minus-btn" id="minus-btn-1"><i className="fa-solid fa-minus" /></button>
            </div>
          </div>
          {/*  Answer card */}
          <div className="answer-text ques-use">
            <h6 className="answer-pop-up">The minimum quantity of produce that can be purchased is fixed, 
              and depends on the type of the produce. 
              There is no limit on the quantity of produce that can be purchased.</h6>
          </div>
        </section>
      </section>
      {/* END OF MAIN */}

			<Footer />
		</>
	);
}
 
export default FAQ;
// const FAQ = () => {
// 	return <div>FAQ</div>;
// };


