import { ContactoPage, HomePage, FormacionPage, ProyectosPage, ServiciosPage, SesionPage, Productos } from "../pages/index";

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
        path: 'contacto',
        component: ContactoPage,
        name: 'Tipo Fuego'
    },
    {
        path: 'formacion',
        component: FormacionPage,
        name: 'Tipo Agua'
    },
    {
        path: 'proyectos',
        component: ProyectosPage,
        name: 'Tipo Lucha'
    },
    {
        path: 'servicios',
        component: ServiciosPage,
        name: 'Pokedex'
    },
    {
        path: 'sesion',
        component: SesionPage,
        name: 'Login'
    },
    {
        path: 'productos',
        component: Productos,
        name: 'Añade tu Pokemon'
    }
];