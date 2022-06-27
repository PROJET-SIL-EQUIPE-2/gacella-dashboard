// assets
import { IconKey } from "@tabler/icons";

// constant
const icons = {
  IconKey,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: "pages",
  title: "Management",
  //caption: 'Pages Caption',
  type: "group",
  children: [
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
          id: "decideurs_profiles",
          title: "Décideurs",
          type: "item",
          url: "decideurs_profiles",
          target: true,
        },
        {
          id: "Agents_de_maintenance",
          title: "Agents de maintenance",
          type: "item",
          url: "Agents_de_maintenance",
          target: true,
        },
      ],
    },
  ],
};

export default pages;
