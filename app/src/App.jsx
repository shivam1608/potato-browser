import { useState , useEffect } from 'react'
import Login from './Login';
import Canvas from './Canvas';

function App() {

  const [user , setUser] = useState("");
  const [embedUrl , setEmbedUrl] = useState(null);
  useEffect(() => {
    let userx = localStorage.getItem("user");
    if(userx){
      setUser(userx);
    }
  }, [])
  

  return (
    <div className="w-screen h-screen bg-[#121212] font-primary">
      {
        embedUrl ? <Canvas embedUrl={embedUrl}/> : <Login user={user} setUser={setUser} embedUrl={embedUrl} setEmbedUrl={setEmbedUrl}/>
      }
    </div>
  )
}

export default App;