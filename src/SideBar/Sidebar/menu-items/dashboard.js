// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'statistics',
            title: 'Dashboard',
            type: 'item',
            url: 'statistics',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Maps',
            type: 'item',
            url: 'cars-view',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
        ,
        {
            id: 'locataires_requests',
            title: 'Demandes de locataires',
            type: 'item',
            url: 'locataires_requests',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
        ,
        {
            id: 'suivi_vehicules',
            title: 'Suivi de véhicules',
            type: 'item',
            url: 'suivi_vehicules',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }

    ]
};

export default dashboard;
