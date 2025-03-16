import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string,
      dropdownBackground1: string,
      dropdownBackground2: string,
      text: string,
      textHover: string,
      textHighlighted: string,
    }
  }
}
