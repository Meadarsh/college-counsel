import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { fDate } from '@/app/utils/format-time';
import { Edit3, Trash2 } from 'lucide-react';
import IconButton from '@mui/material/IconButton';

// ----------------------------------------------------------------------

export default function PostCard({ post, onEdit, onDelete }) {
  const { imageUrl, title, upload_time, _id, url } = post;
  
  const renderTitle = (
    <Typography
      color="inherit"
      variant="subtitle2"
      sx={{
        height: 44,
        overflow: 'hidden',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        fontWeight: 700,
        mt: 1.5,
        lineHeight: 1.4,
        color: 'text.primary'
      }}
    >
      {title}
    </Typography>
  )

  const renderCover = (
    <Box
      component="img"
      alt={title}
      src={imageUrl || '/image/default.jpg'}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        color: 'text.disabled',
        fontWeight: 500,
        letterSpacing: 0.5,
        textTransform: 'uppercase'
      }}
    >
      {fDate(upload_time)}
    </Typography>
  );

  return (
    <Card 
      sx={{ 
        position: 'relative', 
        overflow: 'visible', 
        height: '100%',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        transition: 'all 0.2s ease-in-out',
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
      <Box
        sx={{
          position: 'relative',
          pt: 'calc(100% * 1/2)',
          borderRadius: "12px 12px 0 0",
          overflow: 'hidden',
        }}
      >
        {renderCover}
        <Box
          className="card-actions"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            gap: 1,
            zIndex: 10,
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.2s ease'
          }}
        >
          <IconButton
            size="small"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit(url);
            }}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              '&:hover': { backgroundColor: '#fff', color: 'primary.main' },
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Edit3 size={16} />
          </IconButton>
          <IconButton
            size="small"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDelete(_id);
            }}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              '&:hover': { backgroundColor: '#fff', color: 'error.main' },
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <Trash2 size={16} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ p: 2.5 }}>
        {renderDate}
        {renderTitle}
      </Box>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
