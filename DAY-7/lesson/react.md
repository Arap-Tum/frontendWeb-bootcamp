Use React + Vite

Official Vite docs show the exact command:

## npm create vite@latest

Then choose React when prompted.

🧭 Step-by-Step Installation (Beginner Friendly)

1. Install Node.js

Download from:

https://nodejs.org

Verify:

node -v
npm -v 2. Create your React app

## npm create vite@latest my-react-app

Choose:

Framework: React
Variant: JavaScript 3. Enter project folder
cd my-react-app 4. Install dependencies
npm install 5. Run the app
npm run dev

You will see:

Local: http://localhost:5173
🧱 What your project will look like
my-react-app/
│
├── index.html
├── package.json
├── vite.config.js
└── src/
├── main.jsx
├── App.jsx
└── style.css

This structure is simpler and cleaner than older React setups.

❌ What NOT to use anymore

Old tutorials may show:

npx create-react-app my-app

That tool:

is deprecated
installs 1000+ packages
builds slowly
is no longer recommended by React team

So if you see it in a tutorial, skip that tutorial.

<!-- LESSON 1  -->

1.  What is React?
    React is a JavaScript library for building user interfaces.
    Instead of writing HTML and manually updating it, React updates the UI automatically when data changes.

         HTML VS React

         <h1>Hello Kibet</h1>

         React

         function App() {
         return <h1>Hello Jamleck</h1>;
         }

         React lets us build interfaces using components.

2.  Components
    A component is just a JavaScript function that returns UI.

        ## First component

        function App() {
        return <h1>Hello World</h1>;
        }

        # Multiple components

        function Header() {
        return <h1>My Website</h1>;
        }

        function App() {
        return <Header />;
        }

        # Key concept

        React apps are built from small reusable components

3.  JSX
    JSX stands for JavaScript XML (or JavaScript Syntax Extension). It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly within their JavaScript code. JSX is most commonly used with the React library for building user interfaces

    # js code inside Jsx

                import "./App.css";

                import { Header } from "./Header";

                function App() {
                   const name = "kibet";
                return (
                    <>
                        <Header />
                        <h1>Hello {name} </h1>;
                    </>
                );
                }

                export default App;

4.  Props (Passing Data)
    Props are how components talk to each other.

    Props (short for "properties") are React's mechanism for passing read-only data from parent components to child components, enabling dynamic and reusable components.

    # props in code

    export function Welcome(props) {
    return <h1>Welcome {props.name}</h1>;
    }

    # App prop parent

    import "./App.css";

    import { Header } from "./Header";
    import { Welcome } from "./Welcome";

    function App() {
    const name = "kibet";
    return (
    <>
    <Header />
    <h1>Hello {name} </h1>;
    <Welcome name="User" />;
    </>
    );
    }

    export default App;

    # Multiple Props

     <!-- app.jsx -->
     <User name="Brian" age={23} />

    <!-- User .jsx -->

    export function User({ name, age }) {

    return (
    <>
    <h1>Hello user: {name} </h1>

   <h2>You are {age} Years old</h2>
     </>

      );
    }

5. useState (State Management)

   State lets React remember and update data.

   The useState hook is a fundamental feature in React that allows function components to manage and track data, known as "state". It enables components to "remember" information across renders and update the UI when that data changes

   import { useState } from 'react';

 # counter app

    function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>
                Increase
        </button>
        <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
        </div>
    );
    }

