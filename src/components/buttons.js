import React from 'react';
import {quotes} from './quotes';

export class Buttons extends React.Component {
    constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this)
     }
 
     handleClick() {
         let randomQuote = "Live and Let Die";
         let randomQuoteAuthor = "Paul McCartney";
         this.props.updateQuote(randomQuote,randomQuoteAuthor);
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