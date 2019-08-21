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
     }
 
     render() {
        return (<section id="buttons">
        <div>
          <button id="tweet-quote">Tw</button>
          <button>Tu</button>
        </div>
        <button id="new-quote" onClick={this.handleClick}>New quote</button>
      </section>
        )  
     }
 }