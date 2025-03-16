export const lightTheme = {
    colors: {
        background: "#ffffff",
        dropdownBackground1: "#e0e0e0",
        dropdownBackground2: "#f0f0f0",
        text: "#333333",
        textHover: "#000000",
        textHighlighted: "#d67e20",
    },
};

export const darkTheme = {
    colors: {
        background: "#000000",
        dropdownBackground1: "#0e0e0e",
        dropdownBackground2: "#1c1e21",
        text: "#8899a6",
        textHover: '#ffffff',
        textHighlighted: '#f0a63b'
    },
};

export type Theme = typeof lightTheme;
