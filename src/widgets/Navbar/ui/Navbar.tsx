import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppLInkTheme, AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(cls.Navbar, {}, [className])}>
         <div className={cls.links}>
            <AppLink theme={AppLInkTheme.SECONDARY} className={cls.mainLink} to={'/'}>Главная страница</AppLink>
            <AppLink theme={AppLInkTheme.SECONDARY} to={'/about'}>О странице</AppLink>
         </div>
      </div>
   )
}

