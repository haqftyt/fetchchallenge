import { useEffect, useState } from "react";
import Form from "./components/Form";
import Content from"./components/Content";
function App() {
  const [reqtype,setreqtype]=useState('users');
  const [item,setitem]=useState([]);
  const[fetchError,setfetchError]=useState('');
  let API_URL="https://jsonplaceholder.typicode.com"
  useEffect(()=>{
      const fetchItems = async ()=>{
         try{
          const response= await fetch(`${API_URL}/${reqtype}`)
          if(!response.ok) throw Error('Data not arrived')
          const ListItem= await response.json()
          setitem(ListItem)
          setfetchError(null)
         }
        catch(err){
          setfetchError(err.message)
        }
      } 
     fetchItems()
  },[reqtype])
  return(
    <div className="App">
     <Form
     reqtype={reqtype}
     setreqtype={setreqtype}
     />
     <main>
     {fetchError && <p>Error:{fetchError}</p>}
     {!fetchError && 
     <Content
     item={item}
     />}
     </main>
    </div>
  );
}

export default App;
