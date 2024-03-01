import { useState } from 'react'
import quotes from "./assets/quotes.json"
import './App.css'

interface Quote{
  quote: string;
  author: string;
}

const getRandomQuote = () : Quote => {
  return quotes[Math.floor(Math.random()*quotes.length)]
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())

  return (
    <div>
     <div id="quote-box">
      <div className="quote-content">
        <h2 id="text">
          {quote.quote}
        </h2>
        <h4 id="author">
          -{quote.author}
        </h4>
      </div>
     </div> 
    </div>
  )
}

export default App
