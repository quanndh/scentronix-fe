"use client";

import { Container } from "@mui/material";

interface Props {
  children: React.ReactElement;
}

export default function PageContainer({ children }: Props) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: { xs: "1rem", md: "6rem" },
      }}
    >
      {children}
    </Container>
  );
}
