import { createTheme } from "@vanilla-extract/css";

const [defultThemeClass, vars] = createTheme({
    colors: {
        primary: {
            main: '#651fff',
            light: '#844aff',
            dark: '#400ef0',
            contrastText: '#fff',
        },
        grey: {
            main: '#c2c2c2',
            light: '#dedede',
            dark: '#979797',
        },
    } 
});

const pinkThemeClass = createTheme(vars, {
    colors: {
        primary: {
            main: '#ff1fb8',
            light: '#fb79ce',
            dark: '#ff0087',
            contrastText: '#000',
        },
        grey: {
            main: '#c2c2c2',
            light: '#dedede',
            dark: '#979797',
        },
    }
});

export {
    defultThemeClass,
    pinkThemeClass,
    vars,
}