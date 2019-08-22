import React from 'react';
import {quotes} from './quotes';

export class Buttons extends React.Component {
    constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this)
     }
 
     handleClick() {
         /* returns an array from the get randomiser method on quotes - z-index [] used to access the returned array */
         let generatedRandomQuote = quotes.randomQuote;
         let randomQuoteText = generatedRandomQuote[1];
         let randomQuoteAuthor = generatedRandomQuote[0];
         this.props.updateQuote(randomQuoteText,randomQuoteAuthor);
         /*call to toggle class */
         this.props.randomColour();
     }
 
     render() {
        return (<section id="buttons">
        <div>
          <button id="tweet-quote" class={this.props.classTitle}>Tw</button>
          <button id="tumblr-quote" class={this.props.classTitle}>Tu</button>
        </div>
        <button id="new-quote" class={this.props.classTitle} onClick={this.handleClick}>New quote</button>
      </section>
        )  
     }
 }