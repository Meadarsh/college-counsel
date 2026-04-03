import React from 'react';
import { TextField } from '@mui/material';
import ListFields from '../content_components/ListFiels';

const CertificateField = ({ id, list, updateItem, url, title }) => {
  const handleUrlChange = (e) => {
    const { value } = e.target;
    updateItem(id, { url: value });
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    updateItem(id, { title: value });
  };

  return (
    <div className='flex flex-col gap-3'>
      <TextField
        fullWidth
        label="Certificate Title"
        variant="filled"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        fullWidth
        label="Certificate Image url"
        variant="filled"
        value={url}
        onChange={handleUrlChange}
      />
      <ListFields
        id={id}
        updateItem={updateItem}
        list={list}
        notStyle={true}
      />
    </div>
  );
};

export default CertificateField;
