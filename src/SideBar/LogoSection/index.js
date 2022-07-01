import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import Logo from '../../assets/images/logos/bleu_orange_logo_without_text.svg';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={"/home"}>
        <img style={{height : "50px"}} src={Logo}/>
    </ButtonBase>
);

export default LogoSection;
