import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import Dark from 'shared/assets/icons/theme-dark.svg';
import Light from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <Dark /> : <Light />}
        </Button>
    );
};
