/*eslint-disable*/
import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h3>When should you use Context API?</h3>
            <p><span>T</span>he Context API in React is a powerful feature that allows you to manage state and share data between components without the need for prop drilling. Here are some scenarios where you should consider using the Context API:
                <br />
                Sharing global data: If you have data that needs to be accessed by multiple components throughout your application, the Context API can be a good choice. It allows you to create a context object that holds the data and make it accessible to any component that subscribes to that context.
                <br />
                Theme or styling management: If you have a theme or styling configuration that needs to be applied to multiple components, the Context API can be useful. You can create a context for the theme and provide the theme data to all the components that need it. When the theme is updated, all the components that are subscribed to the context will automatically re-render with the new theme.
                <br />
                User authentication and authorization: When building an application that requires user authentication and authorization, the Context API can be used to manage the user's authentication state. You can create a context that holds the user's information and provide methods for logging in, logging out, and checking the user's permissions. This allows all the components in your application to easily access the user's authentication state.
                <br />
                Multi-level component communication: If you have a deeply nested component structure where components at different levels need to communicate or share data, the Context API can simplify the process. Instead of passing props through each level manually, you can use context to provide the necessary data to the components that need it, regardless of their position in the component hierarchy.
                <br />
                It's important to note that while the Context API can be a powerful tool, it's not always the best choice for every situation. If you only have a small number of components that need to share data, using props might be simpler and more straightforward. Additionally, if you are already using a state management library like Redux or MobX, you may prefer to stick with that for managing your application's state.
            </p>
            <h3>What's custom hook in React?</h3>
            <p><span>A</span> custom hook is a JavaScript function that allows you to reuse stateful logic or side effects across multiple components. Custom hooks are a way to extract reusable code from components and share that logic between different parts of your application.
                <br />
                To create a custom hook, you simply define a function that uses the existing React hooks or other custom hooks. By convention, custom hooks start with the prefix "use" to indicate that they follow the rules of hooks.
                <br />
                Custom hooks can be reused in multiple components, allowing you to avoid duplicating code and maintain a consistent behavior across different parts of your application. They enable you to separate concerns and improve code organization by abstracting complex logic into reusable hooks.
            </p>
            <h3>What's useRef and useMemo?</h3>
            <p><span>u</span>seRef and useMemo are both hooks provided by React that serve different purposes:
                <br />
                <b>useRef:</b>
                <br />
                The useRef hook returns a mutable ref object that persists across component re-renders. Unlike useState, updating the ref object does not trigger a re-render of the component. The useRef hook is commonly used for accessing or storing mutable values or references.
                Here are some common use cases for useRef:
                <br />
                Accessing DOM elements or managing focus: You can use useRef to reference DOM elements and interact with them imperatively.
                Storing previous values: You can store previous values and compare them in subsequent renders to perform certain actions or optimizations.
                Storing mutable values without triggering re-renders: If you have a value that you want to persist across re-renders but doesn't affect the component's output, you can store it in a useRef and modify it without causing re-rendering.
                <br />
                <b>useMemo:</b>
                <br />
                The useMemo hook is used to memoize expensive calculations or to prevent unnecessary re-computations. It takes a function and a dependency array as arguments and returns a memoized value. The value is only re-computed when one of the dependencies in the dependency array changes.
                Here are some common use cases for useMemo:
                <br />
                Memoizing computed values: If you have a computationally expensive function or calculation, you can use useMemo to memoize the result and avoid recomputing it on every render.
                Optimizing component rendering: If you have a component that performs heavy computations or renders complex UI, you can use useMemo to memoize the computed result or the JSX elements, preventing unnecessary re-rendering.
            </p>
        </div>
    );
};

export default Blogs;