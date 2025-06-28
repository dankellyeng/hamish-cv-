import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import { useRef } from "react";

const rotate = keyframes`
  from { transform: scale(1.1) rotate(0deg); }
  to { transform: scale(1.1) rotate(360deg); }
`;

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box textAlign="center">
        <Avatar
          src="/profile.png"
          alt="Hamish"
          onClick={() => audioRef.current?.play()}
          sx={{
            width: 200,
            height: 200,
            margin: "0 auto",
            mb: 2,
            overflow: "hidden",
            "& img": {
              objectFit: "cover",
              objectPosition: "center",
              transform: "scale(1.1)",
              animation: `${rotate} 60s linear infinite`,
            },
          }}
        />

        <Typography variant="h4" component="h1">
          hi, I'm Hamish, please hire me
        </Typography>
      </Box>
      <audio ref={audioRef} src="/svu.mp3" loop style={{ display: "none" }} />
    </Container>
  );
}

export default App;
