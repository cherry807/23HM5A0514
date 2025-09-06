import React, { useState } from "react";
import UrlShortener from "./components/UrlShortener";
import UrlStatistics from "./components/UrlStatistics";
import { Container, Typography } from "@mui/material";

function App() {
  const [urls, setUrls] = useState([]);

  const handleShorten = (newUrl) => {
    setUrls([...urls, { ...newUrl, clicks: 0 }]);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ margin: 2 }}>
        React URL Shortener
      </Typography>
      <UrlShortener onShorten={handleShorten} />
      <UrlStatistics urls={urls} />
    </Container>
  );
}

export default App;
