import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css';
import "./global.css";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
        <Button variant="destructive" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>
    </>
  )
}

export default App
