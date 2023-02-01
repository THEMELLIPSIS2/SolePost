import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
export const HomePage = ({ recents = [] }) => {
  console.log(recents.recents);
  return (
    <div className="homepage" style={{width:'100%'}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Paper>
            <Typography>Recent</Typography> 
            {recents.recents.map((article) => {
              return <div key={article.id}>
                <Paper>   
                  {article.title}
                  </Paper>
             

                </div>;
            })}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>i</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>i</Paper>
        </Grid>

      </Grid>
    </div>
  );
};
