import {
  ThemeProvider,
  CssBaseline,
  LocalizationProvider,
  GlobalStyles,
} from "@monorail/components";
import { StyledEngineProvider } from "@monorail/components/StyledEngineProviderEmotion";
import { AdapterDayjs } from "@monorail/components/AdapterDayjs";
import { meteorLightTheme } from "@monorail/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={meteorLightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledEngineProvider injectFirst>
          <GlobalStyles
            styles={`
              @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
            `}
          />
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
