import 'styled-components';
import {ColorScheme} from "./lib/colorscheme";

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends ColorScheme {}
}
