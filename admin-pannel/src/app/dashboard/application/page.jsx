"use client";
import React, { useEffect, useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  CircularProgress,
  Stack,
  Chip
} from "@mui/material";
import { User, Mail, Phone, BookOpen, Clock } from "lucide-react";
import { fDate } from "@/app/utils/format-time";

const ApplicationPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/application/get");
        if (response.ok) {
          const data = await response.json();
          setApplications(data);
        }
      } catch (error) {
        console.error("Fetch applications error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6, mt: 8 }}>
      <Box mb={6}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
          Applications
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track and manage student applications for various courses.
        </Typography>
      </Box>

      {applications.length > 0 ? (
        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 3, 
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: 'none',
            overflow: 'hidden'
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, py: 2 }}>STUDENT NAME</TableCell>
                <TableCell sx={{ fontWeight: 700, py: 2 }}>CONTACT INFORMATION</TableCell>
                <TableCell sx={{ fontWeight: 700, py: 2 }}>COURSE INTEREST</TableCell>
                <TableCell sx={{ fontWeight: 700, py: 2 }}>SUBMISSION DATE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((app) => (
                <TableRow 
                  key={app._id} 
                  sx={{ 
                    '&:hover': { backgroundColor: 'action.hover' },
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ 
                        p: 1, 
                        borderRadius: 1.5, 
                        backgroundColor: 'primary.lighter', 
                        color: 'primary.main',
                        display: 'flex'
                      }}>
                        <User size={20} />
                      </Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {app.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack spacing={0.5}>
                      <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                        <Mail size={14} />
                        <Typography variant="caption">{app.email}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                        <Phone size={14} />
                        <Typography variant="caption">{app.phone}</Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      icon={<BookOpen size={14} />}
                      label={app.course} 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        borderRadius: 1.5, 
                        fontWeight: 600,
                        backgroundColor: 'secondary.lighter',
                        color: 'secondary.main',
                        borderColor: 'transparent'
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center" color="text.disabled">
                      <Clock size={14} />
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        {fDate(app.createdAt)}
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Paper sx={{ textAlign: 'center', py: 12, borderRadius: 6, border: '1px dashed', borderColor: 'divider', boxShadow: 'none' }}>
          <Typography variant="h5" color="text.secondary">
            No Applications Found
          </Typography>
          <Typography variant="body2" color="text.disabled">
            When students apply through the website, their details will appear here.
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default ApplicationPage;
