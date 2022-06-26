// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const surveillance = 
    {
    id: 'surveillance',
            title: 'Surveillance',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'DemandeSupport',
                    title: 'Demande de Support',
                    type: 'item',
                    url: 'DemandeSupport',
                }
            ]
};

export default surveillance;
