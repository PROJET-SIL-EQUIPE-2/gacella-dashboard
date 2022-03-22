import React , {useState , useEffect} from 'react' ; 
import "./Navbar.css" ;
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
        <nav> 
            {toggleMenu && (
            <ul className="liste">
                <li className="items" > NEXCODE</li>
                <li className="items" > Documentation</li>
                <li className="items" >Sign in</li>
            </ul>
            )}
              <button onClick={toggleNavSmallScreen} className="btn" id="btn-menu"> BTN </button>
            
        </nav>

     );
}
 
export default Navbar;