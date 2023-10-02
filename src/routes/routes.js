import MessageHome from "../message/messageHome";

export const NAVBAR_ROUTES = [
  {
    path: '/',
    name: 'inicio',
  },
  {
    path: '/Pokemons',
    name: 'Pokemons',
  },
];

export const NAVBAR_ROUTES_LYL = [
  {
    path: '/',
    name: 'inicio',
    filtroProduct:'ALL',
  },
  {
    path: '/Productos',
    name: 'Productos',
    filtroProduct:'ALL',

  },
  {
    path: '/Almacen',
    name: 'Almacen',
    filtroProduct:'Almacen',

  },
  {
    path: '/Bebidas',
    name: 'Bebidas',
    filtroProduct:'Bebidas',

  },
  {
    path: '/Congelados',
    name: 'Congelados',
    filtroProduct:'Congelados',
  },
];
