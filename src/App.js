import { Route, Routes } from "react-router-dom";
import {createContext,useState,useEffect} from "react"
import Main from "./components/HeroSection";
import Slider from "./components/Slider";
import Loder from "./components/Loder";
import axios from "axios";
export const Context=createContext(null);
function App() {
  const [loding, setLoding] = useState(false);
  const [dataitem,setData] = useState(null);
  
  useEffect(()=>{
    const loadData = async() =>{
        try {
          setLoding(true)
          const {data}= await axios.get("https://portfoli-latest-server.vercel.app/api/data");
        setData(data);
        setLoding(false);
        } catch (error) {
          alert("error loading data");
          console.error(error);
        }
    }
    loadData();
  },[]);

  if(loding){
    return <div className="loderContaner">
    <Loder/>
  </div>
  }
  return (
    <>
    <Context.Provider value={dataitem}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/info/:id"
          element={
            <div style={{ overflow: "hidden" }}>
              <Slider />
            </div>
          }
        />
      </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
