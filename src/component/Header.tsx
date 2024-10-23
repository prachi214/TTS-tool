import {  IconAlignBoxLeftMiddle} from '@tabler/icons-react';

import { useEffect, useState } from 'react';
const links=["About", "App", "Footer"];
const navLinks=(col:Boolean,clicked:any)=>{
const handleClick=()=>{
  if (clicked) {
    clicked();
  }
}
  return links.map((link, index)=>{
    return <a key={index}  onClick={handleClick} className={`${col?'flex flex-row items-center':''} text-textColor text-ld font-mono hover:text-primaryColor`} href={`#${link}`}>
<span className='text-primaryColor'>0{index+1}. &nbsp; </span>{link}
      </a>
  })
}
const Header=()=>{
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
 
    const controlNavbar = () =>{
      if (window.scrollY>lastScrollY && window.scrollY>70) {
        setShow(false)
      } 
      else setShow(true) ;

   
      setLastScrollY(window.scrollY)
    }
    useEffect(()=>{
      window.addEventListener('scroll',controlNavbar);
      return ()=>window.removeEventListener('scroll', controlNavbar);
    })
    return(
<nav className={`flex ${show?"":"hidden"}  fixed w-full z-10 bg-bgColor h-[15vh] px-10   justify-between items-center`}>
<IconAlignBoxLeftMiddle className="z-40" size={68} color='#64FFDA' stroke={1.25}/>
  
{navLinks(true,null)}

</nav>
    );
}

export default Header;
