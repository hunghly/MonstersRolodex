import React from "react";
import "./card-list.styles.css";
import {Card} from '../card/card.component';

export const CardList = (props) => {
  return (
    <div className={"card-list"}>
      {props.monsters.map((monster) => {
        // pass the monster into the card props so it can be accessed in the Card component
        return <Card key={monster.id} monster={monster}/>
      })}
    </div>
  );
};
