import Vue from 'vue';
import Router from 'vue-router';
/* COMPONENTS FOR ROUTER */
import Home from '../views/Home';
import Artists from '../views/Artist';
import Song from '../views/Song';
import Principal from '../views/Principal';

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/artist', name: 'artist', component: Artists},
    {path: '/song', component: Song},
    {path: '/principal', component: Principal},
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

