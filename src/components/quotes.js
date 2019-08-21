export const quotes = {
    quotes: {
        "Sir Richard Branson" : "To me, business isn’t about wearing suits or pleasing stockholders. It’s about being true to yourself, your ideas and focusing on the essentials.",
        "Tim Cook" : "Life is fragile. We’re not guaranteed a tomorrow so give it everything you’ve got.",
        "Tom Kelley" : "Fail often so you can succeed sooner.",
        "Israelmore Ayivor" : "We are no longer in the dispensation of age and experience. We are in the era of knowledge and information. Information leads a true leader and a true leader leads others." 

    },
  get randomQuote () {
    const authors = Object.keys(this.quotes);
    let randomIndex = authors[Math.floor(Math.random()*authors.length)];
    return [randomIndex, this.quotes[randomIndex]]
  }
}


