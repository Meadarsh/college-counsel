"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AppSidebar } from "../components/SidePannel";
import { useAuth } from "../context/authContext";

export default function Layout({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </Box>
    );
  }

  if (!user) {
    return null; // The AuthProvider will handle the redirect
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          minHeight: "100%",
        }}
      >
        <AppSidebar />
        <Container sx={{ overflowY: "scroll", height: "100vh", width: "80vw" }}>
          {children}
        </Container>
      </Box>
    </>
  );
}
