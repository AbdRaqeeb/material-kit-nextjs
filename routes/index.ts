export const PATH = {
    dashboard: '/',
    user: {
        root: '/users',
    },
    blog: {
        root: '/blogs',
    },
    product: {
        root: '/products',
    },
};

const ROOT_AUTH = '/auth';

function getRoute(root: string, path: string) {
    return `${root}/${path}`;
}

export const PATH_AUTH = {
    login: getRoute(ROOT_AUTH, '/login'),
    register: getRoute(ROOT_AUTH, '/register'),
};
