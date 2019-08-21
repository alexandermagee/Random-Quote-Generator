import React from 'react';

export class GeneratedQuote extends React.Component {
   /* constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this
    }
*/
    render() {
        return (
        <div>
        <article id="text">
         <span id="quotationMarks">❛❛</span> {this.props.text}
        </article>
        <aside id="author">
            - {this.props.author}       
        </aside>
        </div>
        )
    }
}