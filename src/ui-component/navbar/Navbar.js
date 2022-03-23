
import React , {useState , useEffect} from 'react' ; 
import "./Navbar.css" ;
/* import {useMediaQuery} from "@mui/material";
 */
import ListIcon from '@mui/icons-material/List';
import LogoMenu from "../../assets/images/logos/GACELADARK_BLUE.svg" ;

const Navbar = () => {

  
    const [toggleMenu , setToggleMenu] = useState(false) ; // menu caché de base
    const [menu , setMenu] = useState(true) ; 

    const [largeur , setLargeur] = useState(window.innerWidth) ;
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu) ;

    }

   
       
    useEffect(() => {
        const changeWidth =() => {
            setLargeur(window.innerWidth) ; 
            if(window.innerWidth <= 768 ) {
/*                 setToggleMenu(true) ;
 */                setMenu(false) ; 
               
            }
             
            else {
/*                 setToggleMenu(false) ;
 */                setMenu(true) ; 
                 

            }

        }
        window.addEventListener('resize' , changeWidth) ; 
        return () => {
            window.removeEventListener('resize' , changeWidth) ; //si le composant est supprimé par ex
        }

    } , [ ])
    return ( 
        <div id="container-menu"> 
        <nav> 
        {menu && ( 
                <div id="nav-intern">  
            <ul className="liste w-100" >
            <div id="logo-menu"> 
                <img id="logoMenu" src={LogoMenu}  alt=""/> 
                </div>
                <li className="items" > NEXCODE</li>
                <li className="items" > Documentation</li>
                <li className="items" id="badge-menu" > Sign in</li>
            </ul>

            </div>
           
            )}  
                         

            {toggleMenu &&  ( /*toggle true and btn*/ 
                <div id="nav-intern">  
            <ul className="liste w-100" >
            <div id="logo-menu"> 
                <img id="logoMenu" src={LogoMenu}  alt=""/> 
                </div>
                <li className="items" > NEXCODE</li>
                <li className="items" > Documentation</li>
                <li className="items" id="badge-menu" > Sign in</li>
            </ul>

            </div>
            
           
            )} 
            
            <ListIcon onClick={toggleNavSmallScreen} className="gacela-orange" id="btn-menu">  </ListIcon>

            
        </nav>
        </div>

     );
}
 
export default Navbar;