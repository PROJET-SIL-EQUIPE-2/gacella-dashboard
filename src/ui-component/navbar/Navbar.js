import React , {useState , useEffect} from 'react' ; 
import "./Navbar.css" ;
import ListIcon from '@mui/icons-material/List';
import LogoMenu from "../../assets/images/logos/bleu_orange_logo_without_text.svg" ;

const Navbar = () => {
    const [toggleMenu , setToggleMenu] = useState(true) ; // menu caché de base
    const [largeur , setLargeur] = useState(window.innerWidth) ;
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu) ;

    }
    useEffect(() => {
        const changeWidth =() => {
            setLargeur(window.innerWidth) ; 
            if(window.innerWidth < 500 ) {
                setToggleMenu(false) ;
            }
            else {
                setToggleMenu(true) ;

            }

        }
        window.addEventListener('resize' , changeWidth) ; 
        return () => {
            window.removeEventListener('resize' , changeWidth) ; //si le composant est supprimé par ex
        }

    } , [])
    return ( 
        <div id="container-menu"> 
        <nav> 
            {toggleMenu && (
                <div id="nav-intern"> 
               
                
            <ul className="liste">
            <div id="logo-menu"> 
                <img id="logoMenu" src={LogoMenu}  alt=""/> 
                </div>
                <li className="items" > NEXCODE</li>
                <li className="items" > Documentation</li>
                <li className="items" id="badge-menu" > Sign in</li>
            </ul>
            </div>
           
            )}
              <ListIcon onClick={toggleNavSmallScreen}  id="btn-menu">  </ListIcon>
            
        </nav>
        </div>

     );
}
 
export default Navbar;