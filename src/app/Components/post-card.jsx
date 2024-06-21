import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { fDate } from '../utils/format-time';

// ----------------------------------------------------------------------

export default function PostCard({ post}) {
  const {url,imageUrl,title,upload_time } = post;
  const renderAvatar = (
    <Avatar
      alt={'CC'}
      src={'/logo/cc-bg.png'}
      sx={{
        zIndex: 9,
        width: 32,
        height: 32,
        position: 'absolute',
        left: (theme) => theme.spacing(3),
        bottom: (theme) => theme.spacing(-2),
        borderRadius:'50%'
      }}
    />
  );

  const renderTitle = (
    <Link className="w-full" href={`/blog/${url}`}><Typography
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        height:20,
        overflow: 'hidden',
        textDecoration: 'underline',
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        
      }}
    >
      {title}
    </Typography></Link>
  )
  // const renderContent = (
  //   <Link href={`/blogs/${url}`}>
  //   <Typography
  //     color="inherit"
  //     variant="p"
  //     sx={{
  //       height: 30,
  //       width:'90%',
  //       overflow: 'hidden',
  //       WebkitLineClamp: 2,
  //       display: '-webkit-box',
  //       WebkitBoxOrient: 'vertical',
  //     }}
  //   >
  //    {subtitle}
  //    </Typography>
  //   </Link>
  // );

  // const renderInfo = (
  //   <Stack
  //     direction="row"
  //     flexWrap="wrap"
  //     spacing={1.5}
  //     justifyContent="flex-end"
  //     sx={{
  //       mt: 3,
  //       color: 'text.disabled',
  //     }}
  //   >
  //     {[
  //       { number: comment, icon: 'eva:message-circle-fill' },
  //       { number: view, icon: 'eva:eye-fill' },
  //       { number: share, icon: 'eva:share-fill' },
  //     ].map((info, _index) => (
  //       <Stack
  //         key={_index}
  //         direction="row"
  //         sx={{
  //           ...((latestPostLarge || latestPost) && {
  //             opacity: 0.48,
  //             color: 'common.white',
  //           }),
  //         }}
  //       >
  //         <Iconify width={16} icon={info.icon} sx={{ mr: 0.5 }} />
  //         <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
  //       </Stack>
  //     ))}
  //   </Stack>
  // );

  const renderCover = (
    <Link className="w-full" href={`/blog/${url}`}> <Box
      component="img"
      alt={title}
      src={imageUrl||'/image/default.jpg'}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
    </Link>
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: 'text.disabled',
       
      }}
    >
      {fDate(upload_time)}
    </Typography>
  );

  const renderShape = (
    <Box
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: 'absolute',
        color: 'background.paper',
        
      }}
    />
  );

  return (
    <Grid xs={12} sm={ 6} md={4}>
      <Card>
        <Box
          sx={{
            position: 'relative',
            pt: 'calc(100% * 1/2)',
            
          }}
        >
          {renderShape}

          {renderAvatar}

          {renderCover}
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
          }}
        >
          {renderDate}

          {renderTitle}
          {/* {renderContent} */}
          {/* {renderInfo} */}
        </Box>
      </Card>
    </Grid>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};
