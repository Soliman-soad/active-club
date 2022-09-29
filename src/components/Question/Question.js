import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <h2>Question</h2>
            <div>
                <h4>How react work ?</h4>
                <p>React code look a like html but not html.Its jsx format which mainly compailed by bable.ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.</p>
            </div>
            <div>
                <h4>Props vs State</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h4> useEffect uses</h4>
                <p>useEffect use to render data . It has dependency array which value change helps to render initialy and t manages the side-effects in functional components. callback argument is a function to put the side-effect logic </p>
            </div>
        </div>
    );
};

export default Question;