import React, { useState, useEffect } from 'react';
import './Chatbot.css'; // External CSS file for styles

// Training data for chatbot
const trainingData = [
    {
        "tag": "greeting",
        "patterns": [
          "hi",
          "hello",
          "hey",
          "how are you",
          "is anyone there?",
          "show today class",
          "yes",
          "help"
          
        ],
        "responses": [
          "Hello! How can I assist you today?",
          "Hi there! What can I do for you?",
          "Yes!",
          "I am fine! What About You?",
          "yes i am there?",
          "Today's class is at 10:00 AM. Would you like to join?",  
          "Ok click on the link to join [#www.meetgoogle.com]",
          "ok! How can I help you?"
         
        ]
        
      },


    {
        tag: "general_information",
        patterns: [
            "what are the school hours",
            "where is the school located",
            "what is the school contact number",
            "can you tell me about the school facilities",
            "what is the school's mission statement",
            "where can I find the school calendar"
        ],
        responses: [
            "The school hours are from 8:00 AM to 3:00 PM.",
            "The school is located at [SCHOOL_ADDRESS].",
            "You can contact the school at [SCHOOL_PHONE_NUMBER].",
            "The school offers various facilities including a library, sports complex, and science labs.",
            "Our mission is to provide quality education and holistic development to students.",
            "You can find the school calendar on our website at [SCHOOL_CALENDAR_LINK]."
        ]
    },
    {
        tag: "admissions",
        patterns: [
            "how can I apply for admission",
            "what are the admission requirements",
            "when is the admission deadline",
            "is there an entrance exam for admission",
            "where can I find the admission form",
            "can I apply online for admission"
        ],
        responses: [
            "You can apply for admission by visiting the admissions section on our website: [ADMISSIONS_LINK].",
            "Admission requirements include a completed application form, previous school records, and an entrance exam if applicable.",
            "The admission deadline is [ADMISSION_DEADLINE].",
            "Yes, there is an entrance exam for admission to [GRADE/CLASS].",
            "The admission form can be downloaded from [ADMISSION_FORM_LINK].",
            "Yes, you can apply online through our admissions portal: [ADMISSIONS_PORTAL_LINK]."
        ]
    },
   
];

function Chatbot() {
    const [message, setMessage] = useState(''); // Stores the user input
    const [chat, setChat] = useState([]); // Stores the conversation history

    // Function to handle pattern matching with training data
    const getBotResponse = (input) => {
        // Iterate through training data
        for (let item of trainingData) {
            // Check if any pattern matches the user's input
            for (let i = 0; i < item.patterns.length; i++) {
                let pattern = item.patterns[i];
                
                // Check if input matches the current pattern
                if (input.toLowerCase().includes(pattern.toLowerCase())) {
                    // Return the corresponding response at the same index as the pattern
                    const responses = item.responses;
                    
                    // Return the response at the same index (i)
                    return responses[i]; 
                }
            }
        }
        // Default response if no pattern matches
        return "Okay wait! as your internet speed is slow it will take time!";
    };
    

    // Function to handle sending a message
    const sendMessage = async () => {
        if (message.trim() === '') return;

        // Add user's message to the chat
        setChat(prevChat => [...prevChat, { sender: 'user', text: message }]);

        // Get the bot's response based on the input
        const botResponse = getBotResponse(message);

        // Add bot's response to the chat
        setChat(prevChat => [...prevChat, { sender: 'bot', text: botResponse }]);
        setMessage(''); // Clear message input
    };




    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent newline in textarea
                sendMessage();
            }
        };

        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [message]);

    return (
        <div className="container">
            <div className="header">Chat Bot</div>
            <div id="chatbox">
                {/* Display chat messages */}
                {chat.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.sender === 'user' ? `You: ${msg.text}` : `Bot: ${msg.text}`}
                    </div>
                ))}
            </div>
            <div style={{ padding: '20px', display: 'flex', alignItems: 'flex-end' }}>
                <textarea
                    id="user_input"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                ></textarea>
                <button className="rounded-[8px] border border-richblack-700 bg-[#6e45e2] px-[12px] py-[8px] mb-7 text-white "  onClick={sendMessage}>
                Send
              </button>

            </div>
        </div>
    );
}

export default Chatbot;
