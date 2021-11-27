import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      header: string,
      body: string,
      footer: string,
      bodyText: string
      headerText: string
      nav: string,
    };
  }
}