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
    <>
      {quote.quote}
    </>
  )
}

export default App
