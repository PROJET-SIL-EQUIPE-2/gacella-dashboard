import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
// import Logo from '../../assets/images/logos/bleu_orange_logo_without_text.svg';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={"/home"}>
        {/*<img src={Logo}/>*/} LOGO
    </ButtonBase>
);

export default LogoSection;
