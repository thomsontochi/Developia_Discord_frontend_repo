import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import ServicePage from '../pages/ServicePage';
import Cart from '../pages/Cart';

export const routes = [
    {
        path: '/',
        element: Home,
        title: 'Home | Vendly'
    },
    {
        path: '/about',
        element: About,
        title: 'About Us | Vendly'
    },
    {
        path: '/blog',
        element: Blog,
        title: 'Blog | Vendly'
    },
    {
        path: '/contact',
        element: Contact,
        title: 'Contact Us | Vendly'
    },
    {
        path: '/service',
        element: ServicePage,
        title: 'Services | Vendly'
    },
    {
        path: '/cart',
        element: Cart,
        title: 'Services | Vendly'
    },
    {
        path: '*',
        element: NotFound,
        title: '404 - Page Not Found | Vendly'
    }
];
