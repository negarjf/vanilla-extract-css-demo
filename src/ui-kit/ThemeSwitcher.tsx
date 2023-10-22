import { ReactNode, useState } from "react"
import { defultThemeClass, pinkThemeClass } from "./theme.css";

export const ThemeSwitcher = ({ children }: { children: ReactNode }) => {
    const themeMap = {
        default: defultThemeClass,
        pink: pinkThemeClass
    }
    const [theme, setTheme] = useState<keyof typeof themeMap>('default');

    return (
        <div className={themeMap[theme]}>
            <div className="theme-swicher">
                {
                    Object.keys(themeMap).map((value) => 
                        (
                         <label key={value}>
                            {value} theme
                            <input 
                            type="radio" 
                            name="theme" 
                            value={value} 
                            checked={value === theme }
                            onChange={() => setTheme(value as keyof typeof themeMap)}
                            />
                        </label>
                    ))
                }
            </div>
            {children}
        </div>
    )
}