import React from 'react';
import ReactToPdf from 'react-to-pdf'

const Blog = () => {
    // react to PDF
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [10, 10]
    };

    return (
        <section className='py-12' ref={ref}>
            <div className='px-3 xl:px-0 xl:container mx-auto relative'>
                <ReactToPdf targetRef={ref} filename="chef-recipes.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => (
                        <button className='bg-[#ffa200] py-2 px-5 rounded-full font-semibold text-white mb-8 mx-auto block' onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div className='bg-slate-100 rounded-2xl py-8 px-6 mb-4'>
                    <h4 className='text-xl font-semibold text-[#ffa200]'>I. Tell us the differences between uncontrolled and controlled components.</h4>
                    <p>
                        <span className='font-medium'>Controlled components: </span>Controlled components are React components that store their own state and pass data to their child components through props. The state of a controlled component is managed by React, and any changes to the state will trigger a re-render of the component and its child components.
                        <br></br>
                        <span className='font-medium'>Uncontrolled components: </span>Uncontrolled components are React components that store their own state internally, rather than relying on React to manage their state. Uncontrolled components use refs to access their internal state, which makes them less flexible than controlled components but also faster and easier to implement.
                    </p>
                </div>
                <div className='bg-slate-100 rounded-2xl py-8 px-6 mb-4'>
                    <h4 className='text-xl font-semibold text-[#ffa200]'>II. How to validate React props using PropTypes</h4>
                    <p>To validate React props using PropTypes.
                        To use PropTypes, I need to import it from the 'prop-types' package and then define the propTypes object in My component. The propTypes object should contain a set of keys, with the name of each key being the name of the prop I want to validate, and the value of each key being the type I want to validate against.</p>
                </div>
                <div className='bg-slate-100 rounded-2xl py-8 px-6 mb-4'>
                    <h4 className='text-xl font-semibold text-[#ffa200]'>III. Tell us the difference between nodejs and express js.</h4>
                    <p>
                        <span className='font-medium'>Node.js: </span>Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine that allows developers to run JavaScript on the server-side. It provides a set of core modules for performing common tasks such as reading and writing files, making network requests, and creating child processes.
                        <br />
                        <span className='font-medium'>Express.js: </span>Express.js, on the other hand, is a web framework built on top of Node.js that simplifies the process of creating web applications and APIs. It provides a set of features such as routing, middleware, and templates that help developers quickly build scalable and maintainable web applications.
                    </p>
                </div>
                <div className='bg-slate-100 rounded-2xl py-8 px-6 mb-4'>
                    <h4 className='text-xl font-semibold text-[#ffa200]'>IV. What is a custom hook, and why will you create a custom hook?</h4>
                    <div>
                        A custom hook in React is a JavaScript function that starts with the prefix "use"<br />
                        <ul className='list-disc ps-8'>
                            <li>To share logic between components without repeating code</li>
                            <li>To improve code organization and reduce duplication</li>
                            <li>To encapsulate complex or reusable behavior in a simple function that can be reused in different contexts</li>
                            <li>To abstract away implementation details and make code more readable and easier to maintain.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;