import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  
  const [input, setInput] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);
      setInput('')
    }}>
      <input
        value={input}
        type="text"
        onChange={(e) => {
          setInput(e.target.value)    
        }
      }
        placeholder="Ciudad..."
      />
      <button type="submit" >+</button>
    </form>
  );
}
