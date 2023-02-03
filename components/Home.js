import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export const HomePage = ({ recents = [] }) => {
  function howLongAgo(date){
    let rightDate = new Date(date)
    var seconds = Math.floor((new Date() - rightDate) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
  }

  console.log(recents);
  return (
    <div className="homepage" style={{width:'100%'}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Paper>
            <Typography>Recent</Typography> 
            {recents.map((article) => {
              let title = (article.title).toUpperCase()
              return <div key={article.id}>
                <Paper>   
                 <Typography>{title}</Typography>
                  {howLongAgo(article.created_at)} ago
                  
                  </Paper>
                </div>;
            })}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>Features</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>Socials</Paper>
        </Grid>

      </Grid>
    </div>
  );
};
