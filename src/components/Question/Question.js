import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <div>
                <h4>How react work ?</h4>
                <p>React code look a like html but not html.Its jsx format which mainly compailed by bable.ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.</p>
            </div>
            <div>
                <h4>Props vs State</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h4>How useState work?</h4>
                <p> The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
            </div>
        </div>
    );
};

export default Question;