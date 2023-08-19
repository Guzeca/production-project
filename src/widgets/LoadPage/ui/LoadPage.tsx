import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './LoadPage.module.scss';

interface LoadPageProps {
   className?: string;
}

export const LoadPage = ({ className }: LoadPageProps) => (
    <div className={classNames(cls.LoadPage, {}, [className])}>
        <Loader />
    </div>
);
