import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
    base: {
        borderRadius: 8,
        border: `1px solid transparent`,
        padding: '0.6em 1.2em',
        fontSize: '1.5em',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'border-color 0.25s',
        // backgroundColor: vars.colors.primary.main,
        // color: vars.colors.primary.contrastText,

        ':hover': {
            // backgroundColor: vars.colors.primary.dark,
        },

        ':focus': {
            borderColor: 'transparent',
            outline: `4px solid ${vars.colors.grey.main}`,
        },
    },

    variants: {
        type: {
            fill: {
                backgroundColor: vars.colors.primary.main,
                color: vars.colors.primary.contrastText,
            
                ':hover': {
                    backgroundColor: vars.colors.primary.dark,
                },
            },
            outline: {
                backgroundColor: vars.colors.grey.light,
                borderColor: vars.colors.primary.dark,
                color: vars.colors.primary.dark,
            
                ':hover': {
                    backgroundColor: vars.colors.primary.dark,
                    color: vars.colors.primary.contrastText,
                },
            },
            text: {
                backgroundColor: 'transparent',
                color: vars.colors.primary.dark,
                
                ':hover': {
                    backgroundColor: vars.colors.grey.light,
                },
            }
        }
    },
    defaultVariants: {
        type: 'fill',
    }
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;
