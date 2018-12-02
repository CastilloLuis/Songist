import Vue from 'vue';
import Router from 'vue-router';
/* COMPONENTS FOR ROUTER */
import Home from '../views/Home';
import Lyrics from '../views/Lyrics';
import Artists from '../views/Artist';
import Song from '../views/Song';

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/lyrics', component: Lyrics},
    {path: '/artist', component: Artists},
    {path: '/songs', component: Song}
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

