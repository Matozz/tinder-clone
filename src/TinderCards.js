import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";

import "./TinderCards.css";

function TinderCards() {
  // Info Data
  const [people, setpeople] = useState([]);
  // == const people = []
  // people.push('john','tom')

  // setpeople([...people, 'john', 'tom']); (...keep what already and add john..)

  useEffect(() => {
    const unsubscribe = database.collection("people");
    onSnapshot((snapshot) => setpeople(snapshot.docs.map((doc) => doc.data())));
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            {/* Always add key in react efficient render / better performance */}
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
