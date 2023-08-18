import { Loader } from 'shared/ui/Loader';
import cls from './LoadPage.module.scss';
import { classNames } from 'shared/lib/ClassNames/classNames';

interface LoadPageProps {
   className?: string;
}

export const LoadPage = ({ className }: LoadPageProps) => {
   return (
      <div className={classNames(cls.LoadPage, {}, [className])}>
        <Loader />
      </div>
   )
}