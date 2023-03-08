import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppLInkTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLInkTheme.SECONDARY} className={cls.mainLink} to="/">Главная страница</AppLink>
            <AppLink theme={AppLInkTheme.SECONDARY} to="/about">О странице</AppLink>
        </div>
    </div>
);
