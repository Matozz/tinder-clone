import React, { useState } from "react";

import "./ChatScrenn.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  // Keep Tracking Msg
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Davis",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254",
      message: "Hey Davis Here",
    },
    {
      name: "Davis",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254",
      message: "Whatsup",
    },
    {
      name: "Davis",
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254",
      message: "Yoooo!!!",
    },
    {
      message: "hi Davis!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOUR CHAT WITH DAVIS STARTED ON 19/08/20{" "}
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        ></input>
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
