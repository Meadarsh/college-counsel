import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon({data}) {
  return (
    <div className='lg:w-[93%]'>
     {data?.map((e)=>( <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontWeight:700}}>{e.Question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         {e.Answer}
          </Typography>
        </AccordionDetails>
      </Accordion>))}
    </div>
  );
}
