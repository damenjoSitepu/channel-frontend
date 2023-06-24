import { HomeFooter } from "src/app/interfaces/HomeFooter.interface";

/**
 * Define Const Of Home Footer Menus
 */
export const HOME_FOOTER_MENUS: HomeFooter[] = [
    {
        linkName: 'Home',
        linkRoute: ['/']
    },
    {
        linkName: 'Login',
        linkRoute: ['/auth','login']
    },
    {
        linkName: 'Register',
        linkRoute: ['/auth','register']
    }
];