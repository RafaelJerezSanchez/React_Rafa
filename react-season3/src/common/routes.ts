import { PageFuego, HomePage, PageLucha, ServiciosPage, SesionPage, Productos, PageAgua } from "../pages/index";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/home',
        component: HomePage,
        name: 'Home'
    },
    {
        path: 'fuego',
        component: PageFuego,
        name: 'Tipo Fuego'
    },
    {
        path: 'agua',
        component: PageAgua,
        name: 'Tipo Agua'
    },
    {
        path: 'lucha',
        component: PageLucha,
        name: 'Tipo Lucha'
    },
    {
        path: 'pokedex',
        component: ServiciosPage,
        name: 'Pokedex'
    },
    {
        path: 'sesion',
        component: SesionPage,
        name: 'Login'
    },
    {
        path: 'addpoke',
        component: Productos,
        name: 'Añade tu Pokemon'
    }
];