import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

export default function MentorCard() {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        boxShadow: 3,
      }}
    >
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center', textAlign: 'center',mt:2 }}>
        <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
        <Chip
          size="small"
          variant="outlined"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.paper',
          }}
          label="PRO"
        />
        <Typography variant="h6">Josephine Blanton</Typography>
        <Typography variant="body2" sx={{ maxWidth: '24ch' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
          love to code.
        </Typography>
       
      </Box>
      <Box sx={{display:'flex',justifyContent:'right', bgcolor: 'background.default' }}>
        <CardActions>
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.paper' }}>
            <Button>Message</Button>
          </ButtonGroup>
        </CardActions>
      </Box>
    </Card>
  );
}
