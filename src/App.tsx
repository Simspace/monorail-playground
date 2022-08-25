import { Box, Container, Paper, Stack, Typography } from "@monorail/components";
import { useState } from "react";

function App() {
  return (
    <Stack width="100%" direction="row" justifyContent="center">
      <Stack direction="column" gap={2}>
        <Typography variant="h1">
          Welcome to the Monorail playground!
        </Typography>
        <Typography>
          Edit App.tsx to experiment with Monorail components
        </Typography>
      </Stack>
    </Stack>
  );
}

export default App;
