import { FC } from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLInkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLInkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, to, children, theme = AppLInkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
