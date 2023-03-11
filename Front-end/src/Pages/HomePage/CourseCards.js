import React from "react";
import './CSS/CategoriesCard.css';
import Rating from '../CoursePage/Rating';
import { useState } from "react";

const CourseCards =(props)=>{
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance();
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const texts = Array.from(elements).map((el) => el.textContent);
    const text = texts.join(' ');
    utterance.text = text;
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
  };
  
    return(

      <div>

              <div className="Course-Cards">                
                      <div className="my-card">
                         <img src={props.img} alt="img" loading="lazy"/> 
                          <p className="Course-Title">{props.title}</p>
                          <p className="Course-Teacher">{props.teacher}</p>
                          <p className="Course-info"> 
                            <span className="Course-rating">{props.rating}</span>  
                            <span className="Course-star"> 
                                <Rating 
                                  rating={props.rating}
                                  edit={false}/>
                            </span> 
                            <span className="CourseTimesUpdated">({props.ratingtimesUpdated} ratings)</span>
                            <span className="Course-Price">₹ {props.price}</span>
                          </p>
                      </div>
               </div>
               <button disabled={isSpeaking} onClick={handleSpeak}>
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
               </div>
      );

      }

export default CourseCards;


             