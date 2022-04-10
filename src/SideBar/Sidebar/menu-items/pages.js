// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'Compte_Gestion',
            title: 'Gestion des comptes',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'Agents_de_maintenance',
                    title: 'Agents de maintenance',
                    type: 'item',
                    url: 'Agents_de_maintenance',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
