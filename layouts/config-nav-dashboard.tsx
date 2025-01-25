import { Label } from '@/components/label';
import { SvgColor } from '@/components/svg-color';
import { PATH, PATH_AUTH } from '@/routes';

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor width='100%' height='100%' src={`/assets/icons/navbar/${name}.svg`} />;

export const navData = [
    {
        title: 'Dashboard',
        path: PATH.dashboard,
        icon: icon('ic-analytics'),
    },
    {
        title: 'User',
        path: PATH.user.root,
        icon: icon('ic-user'),
    },
    {
        title: 'Product',
        path: PATH.product.root,
        icon: icon('ic-cart'),
        info: (
            <Label color='error' variant='inverted'>
                +3
            </Label>
        ),
    },
    {
        title: 'Blog',
        path: PATH.blog.root,
        icon: icon('ic-blog'),
    },
    {
        title: 'Sign in',
        path: PATH_AUTH.login,
        icon: icon('ic-lock'),
    },
    {
        title: 'Not found',
        path: '/404',
        icon: icon('ic-disabled'),
    },
];
