**Lession 1** -  Understanding react and component-based architecture


React Journey: A Foundation for Modern Web Development

module's learning objectives:

- Understand the principles of component-based UI development.  
- Set up a React project using Create React App.
- Create and render basic React components. 


Why Choose React? The Compelling Advantages -

Component-Based Architecture
Declarative Programming
Virtual DOM for Performance
JSX (JavaScript XML)
Strong Community and Ecosystem
Learn Once, Write Anywhere - build native mobile applications iOS and Android using React


In our FastAPI + React full-stack setup, React will be responsible for the entire user interface

Understanding Imperative vs. Declarative Programming-

Imperative Programming:
In an imperative approach, you tell the computer how to do something by providing a sequence of commands that change the program's state.

Declarative Programming:
In a declarative approach, you describe what you want the end result to be, without specifying the exact steps to get there. 


Declarative Approach (React)

In React, you would describe the UI based on the current state. You declare that if the message should be visible, then render the message element; otherwise, render nothing 

**The Virtual DOM**: React's Secret Weapon for Performance

A memory representation of the actual DOM

 React uses it to *efficiently update the actual DOM*

This process is called **reconciliation**

steps:

- State Change Trigger : React component changes  React needs to update the UI.

- New Virtual DOM Tree Creation :  React creates a *new* Virtual DOM tree that represents the UI *after* the state change.

- Diffing Algorithm : React then compares this new Virtual DOM tree with the *previous* Virtual DOM tree
This comparison algorithm called the 'diffing' algorithm.

- Batching Updates :  The diffing algorithm identifies the minimal set of changes required to update the UI. 
 React then batches these changes together.

- Updating the Real DOM :  Finally, React applies only these identified, minimal changes to the actual browser DOM.
Instead of re-rendering large portions of the page, React updates only the specific elements that have changed.



**Components: The Building Blocks of React Applications**

A React component is essentially a JavaScript function or a class that accepts inputs (called props) and returns React elements describing what should appear on the screen.

Types of Components: Functional vs. Class Components

1. Functional Components

Functional components are JavaScript functions that return JSX. 

example - go to examples/module1


2. Class Components

Class components are ES6 classes that extend React.Component. 

examples - go to examples/module



**lession 2**

Props: The Language of Data Flow Between Components

 The primary mechanism for passing data from a parent component down to a child component is through props.

 you can pass data to it using attributes

 These attributes become available as an object within the child component, conventionally named props.

 Example: Functional Component Receiving Props - go to examples/module 1/props

 allow's to Passing Various Data Types: null, numbers, booleans, arrays, objects, functions, and even other React components.

 Destructuring Props: To make code cleaner, you can destructure props directly in the function signature 

 Destructuring Props Example: go to examples/module1/destructuringProps


 **JSX: Writing UI Declaratively with JavaScript XML**


 allows you to write HTML-like code directly within your JavaScript files

 gets compiled into regular JavaScript function calls by tools like **Babel**.

 goto examples/module1/jsx.js

React uses this JSX to create what it calls React elements

Rules of JSX =

1. Expressions within Curly Braces

   This allows you to dynamically insert data, call functions, or use JavaScript logic within your UI structure.

2. className instead of class

   Since class is a reserved keyword in JavaScript, you must use className when specifying CSS classes in JSX.

3. Attributes

   Most HTML attributes translate directly to JSX attributes. However, some HTML attributes have different names in JSX (for example, class becomes className, for becomes htmlFor).


4. Self-Closing Tags

   Elements that do not have children can be written as self-closing tags.
    <img src='logo.png' alt='Logo' />;


5. JavaScript Expressions in JSX

   You can use JavaScript expressions inside curly braces. This includes variables, function calls, and ternary operators for conditional rendering.


6. Comments in JSX


   JSX comments must be enclosed within curly braces and use this format:
   {/* This is a JSX comment */}


   
