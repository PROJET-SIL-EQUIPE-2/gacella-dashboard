// assets
import { IconKey } from '@tabler/icons';
import { IconDashboard } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconDashboard
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Authentication',
    //caption: 'Pages Caption',
    type: 'group',
    children: [
        {
          id: "register3",
          title: "Register",
          type: "item",
          url: "/pages/register/register3",
          target: true,
        },
      ],
    },
    {
      id: 'DemandeDeverouillage',
      title: 'Demande de déverouillage',
      type: 'item',
      url: 'DemandeDeverouillage',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
    ,
    {
      id: "Compte_Gestion",
      title: "Gestion des comptes",
      type: "collapse",
      icon: icons.IconKey,

            children: [
                {
                    id: 'default',
                    title: 'Demandes de locataires',
                    type: 'item',
                    url: 'locataires_requests',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },
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
            id: 'DemandeDeverouillage',
            title: 'Demande de déverouillage',
            type: 'item',
            url: 'DemandeDeverouillage',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
        ,
        {
            id: 'Compte_Gestion',
            title: 'Gestion des comptes',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'decideurs_profiles',
                    title: 'Décideurs',
                    type: 'item',
                    url: 'decideurs_profiles',
                    target: true
                },
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
