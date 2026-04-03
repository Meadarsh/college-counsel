"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CircularProgress,
  Stack,
  Button,
  IconButton
} from "@mui/material";
import { PlusCircle, GraduationCap, Building2, Edit3, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UniversitiesPage = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUniversities = async () => {
    try {
      const response = await fetch("/api/university/get-university");
      if (response.ok) {
        const data = await response.json();
        setUniversities(data);
      }
    } catch (error) {
      console.error("Fetch universities error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const handleEdit = (url) => {
    router.push(`/dashboard/university/edit/${url}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this university?")) {
      try {
        toast.info("Deleting...");
        const response = await fetch(`/api/university/deleteuniversity?id=${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (result.status) {
          toast.success("University deleted successfully");
          fetchUniversities(); // Refresh the list
        } else {
          toast.error(result.message || "Failed to delete university");
        }
      } catch (error) {
        toast.error("An error occurred during deletion");
      }
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6, mt: 8 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={6}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
            University Partners
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your academic collaborations and tied-up institutions.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlusCircle size={20} />}
          onClick={() => router.push("/dashboard/university/create")}
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontWeight: 700,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
          }}
        >
          Add University
        </Button>
      </Stack>

      {universities.length > 0 ? (
        <Grid container spacing={3}>
          {universities.map((uni, ind) => (
            <Grid item key={uni._id || ind} xs={12} sm={6} md={4} lg={3}>
              <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    position: 'relative',
                    transition: 'all 0.2s ease-in-out',
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: 'rgba(0, 0, 0, 0.01)',
                      '& .card-actions': {
                        opacity: 1,
                        visibility: 'visible'
                      }
                    }
                  }}
              >
                {/* Action Buttons */}
                <Box 
                  className="card-actions"
                  sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12, 
                    display: 'flex', 
                    gap: 1,
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'all 0.2s ease',
                    zIndex: 10
                  }}
                >
                  <IconButton 
                    size="small"
                    onClick={() => handleEdit(uni.url)}
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.9)', 
                      boxShadow: 2,
                      '&:hover': { backgroundColor: '#fff', color: 'primary.main' } 
                    }}
                  >
                    <Edit3 size={16} />
                  </IconButton>
                  <IconButton 
                    size="small"
                    onClick={() => handleDelete(uni._id)}
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.9)', 
                      boxShadow: 2,
                      '&:hover': { backgroundColor: '#fff', color: 'error.main' } 
                    }}
                  >
                    <Trash2 size={16} />
                  </IconButton>
                </Box>

                <Link href={`/dashboard/university/edit/${uni.url}`} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', width: "100%", height: 70, mb: 3 }}>
                      <Image 
                        layout="fill"
                        objectFit="contain"
                        src={uni.logoUrl || '/image/default-uni-logo.png'} 
                        alt={uni.detail?.title || "University Logo"} 
                      />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary', lineHeight: 1.2, minHeight: '2.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {uni.detail?.title || "Unnamed University"}
                    </Typography>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'primary.main', backgroundColor: 'primary.lighter', px: 1.5, py: 0.5, borderRadius: 1.5 }}>
                      <GraduationCap size={14} />
                      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
                        {uni.offeredCourses || 0} COURSES
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 12, backgroundColor: 'action.hover', borderRadius: 6 }}>
          <Building2 size={64} className="mx-auto mb-4 text-gray-300" />
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No Universities Yet
          </Typography>
          <Typography variant="body2" color="text.disabled" sx={{ mb: 4 }}>
            Start by adding your first university partner to the platform.
          </Typography>
          <Button 
            variant="outlined" 
            onClick={() => router.push("/dashboard/university/create")}
          >
            Create Now
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default UniversitiesPage;