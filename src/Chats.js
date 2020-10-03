import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Anthony Davis"
        message="Hey! Davis Here 😀"
        timestamp="30 minutes ago"
        profilePic="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&w=350&h=254"
      />
      <Chat
        name="king James"
        message="Hey! James Here 💪"
        timestamp="3 minutes ago"
        profilePic="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
      />
      <Chat
        name="Dwight Howard"
        message="Hey! It's Howard 😀"
        timestamp="56 minutes ago"
        profilePic="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2384.png&w=350&h=254"
      />
    </div>
  );
}

export default Chats;
