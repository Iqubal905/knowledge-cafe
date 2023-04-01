import React from 'react';

const BlogForAns = () => {
    return (
        <div>
           

           <div>
           <h2>Question & Answer</h2> 
       <h3>1. What is the difference between props and state?</h3>
       <p>1. Data change through State.</p>
       <p>1. Data transfer among the components through Props</p>
       <br />
       <p>2. State is mutable</p>
       <p>2. Props is immutable</p>
       <br />
       <p>3. State is controlled by react components.</p>
       <p>3.Props are controlled by whoever renders the components. </p>
       <p>4.State can used to display changes with the component</p>
       <p>4. Props are used to communicate between components</p>
           </div>
           

           <div>
<h3>2. How does useState work?</h3>
<h4>Answer:</h4>
1<p>We use useState more and more in our App. We manage our internal state by using useState.
     useState is a function which received a value as initial value. useState return a array which included two element.
     First element is initial value and second element is a function. 
     Data is updated by the function. when we call the function then the function update the value and then render the value. </p>
           </div>

<div>
    <h3>3. Purpose of useEffect other than fetching data.</h3>
    <h4>Answer:</h4>
    <p> All side-effects work of a function to be done by using useEffect. These sideEffect works are Manual Dom Manupulation, Timer function, Subscription Setup and Dependency etc. without Date Fetching. useEffect can return Cleanup function. Using useEffect function execution to be controlled   
         </p>

</div>
<div>
    <h3>4. How does react work?</h3>
    <h4>Answer: </h4>
    <p> React is a component-based, open-source front-end library . React hooks allow us to use React features without writing a class. This includes state, component lofecycle and much more.

        

</p>.
</div>


        </div>
    );
};

export default BlogForAns;