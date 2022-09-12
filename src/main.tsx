import {
  ThemeProvider,
  CssBaseline,
  LocalizationProvider,
} from "@monorail/components";
import { StyledEngineProvider } from "@monorail/components/StyledEngineProviderEmotion";
import { AdapterDayjs } from "@monorail/components/AdapterDayjs";
import { classicLight } from "@monorail/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={classicLight}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
