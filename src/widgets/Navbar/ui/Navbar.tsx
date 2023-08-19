import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppLInkTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLInkTheme.SECONDARY} className={cls.mainLink} to="/">
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLInkTheme.SECONDARY} to="/about">
                    {t('О странице')}
                </AppLink>
            </div>
        </div>
    );
};
