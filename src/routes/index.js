import Home from '~/pages/Home';
import Following from '~/pages/Following';

//public route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

//private route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
