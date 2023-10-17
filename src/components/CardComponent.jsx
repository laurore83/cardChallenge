import React from "react";

class CardMood {
  constructor(mood, img, advice) {
    this.mood = mood;
    this.img = img;
    this.advice = advice;
  }
}
const contente = new CardMood(
  "contente",
  "/src/assets/contente.jpg",
  "conseils"
);
const perdue = new CardMood("perdue", "/src/assets/perdue.jpg", "conseils");

/* function CardComponent(props) {
      return()
  }

  export default CardComponent;*/
