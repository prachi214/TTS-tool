
import Header from "./Header";

import TtsApp from "./Ttsapp";
import { useEffect,useState } from "react";
import About from "./About";
import Footer from "./Footer";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000) 
    }, [])
    return <div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
  
        <Header />
      <About />
<TtsApp />
<Footer />
        </>:
        ""}
    </div>
};
export default HomePage;




