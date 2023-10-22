import { ReactNode } from "react";
import { ButtonVariants, buttonStyle } from "./button.css";

type ButtonProps = {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
} & ButtonVariants;

export const Button = ({
    children,
    disabled,
    onClick,
    type,
}: ButtonProps) => {
    const className = buttonStyle({ type });

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
};
