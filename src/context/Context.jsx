import { createContext, useState } from "react";
import runChat from "../config/hal"; // Importing the function to run the chatbot

export const Context = createContext(); // Creating a context for the chatbot

const ContextProvider = (props) => {
    // State variables for managing input, prompts, results, and loading state
    const [input, setInput] = useState(''); // Current input value
    const [recentPrompt, setRecentPrompt] = useState(''); // Most recent prompt
    const [prevPrompts, setPrevPrompts] = useState([]); // Array of previous prompts
    const [showResult, setShowResult] = useState(false); // Flag to show/hide result
    const [loading, setLoading] = useState(false); // Flag to indicate loading state
    const [resultData, setResultData] = useState(''); // Data for displaying the result

    // Function to delay displaying each word of the response
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    // Function to reset the chatbot state
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    // Function to handle sending a prompt to the chatbot
    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResult(true);

        let response;
        if (prompt !== undefined) {
            // If prompt is provided, use it to run the chatbot
            response = await runChat(prompt);
            setRecentPrompt(prompt);
        } else {
            // If prompt is not provided, use the current input value
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await runChat(input);
        }

        // Identify and wrap code blocks in <code> tags
        response = response.replace(/```([^`]+)```/g, '<pre>$1</pre>');

        // Replace ## with <h1> and </h1>
        response = response.replace(/##(.+?)(\n|$)/g, '<h1>$1</h1>$2');

        // Split the response into an array and format it
        let responseArray = response.split('**');
        let newResponse = '';

        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += '<b>' + responseArray[i] + '</b>';
            }
        }

        // Further formatting of the response
        let newResponse2 = newResponse.split('*').join('<br/><br/>');
        let newResponseArray = newResponse2.split(' ');

        // Delay displaying each word of the response
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + ' ');
        }

        // Reset loading state and input value
        setLoading(false);
        setInput('');
    };

    // Context value containing state variables and functions
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    // Providing the context value to children components
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider; // Exporting the ContextProvider component
