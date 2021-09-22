import MainPage from '../pages/MainPage/index.js';
import KakaoMap from '../pages/Map/map.js';

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const navigateTo = (url, props = null) => {
    history.pushState(props, null, url);
    router();
}

const router = () => {
    const routes = [
        { path: '/', view: MainPage },
        { path: '/second', view: KakaoMap },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if(!match) {
        match = {
            route: routes[routes.length - 1],
            result: [location.pathname],
        };
    }

    const app = document.querySelector('.app');
    app.scrollTop = 0;
    app.innerHTML = '';
    new match.route.view(app);
};

export { router, navigateTo };