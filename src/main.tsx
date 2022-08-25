import {
  ThemeProvider,
  CssBaseline,
  StyledEngineProvider,
  LocalizationProvider,
} from "@monorail/components";
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
