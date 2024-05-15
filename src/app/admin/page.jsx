"use client"
import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Nav from './layouts/dashboard/nav';
import Blogpage from '../blogs/blogpage';
import { BlogView } from './sections/blog/view';

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <BlogView/>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
