import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export function CustomersFilters(){
  return (
   <>
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search customer"
        startAdornment={
          <InputAdornment position="start">
            +
          </InputAdornment>
        }
        sx={{ maxWidth: '500px' }}
      />
    </Card>
   </>
  );
}
