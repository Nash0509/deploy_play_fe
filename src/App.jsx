import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('');

  useEffect(() => { 
       getDashboardData();
  }, [])

    function getDashboardData() { 
      fetch('/api/')
     .then(res => res.json())
     .then((res) => setContent(res.dashboardContent))
     .catch((err) => console.error(err));
    }

  return (
    <>
       <div>
           {content}
       </div>
    </>
  )
}

export default App
