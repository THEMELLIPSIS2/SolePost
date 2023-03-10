import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import Link from 'next/link';

export const HomePage = ({ recents = [],features=[] }) => {
let [today,setToday] = useState(null)

useEffect(()=>{
setToday(new Date())
},[])

  function howLongAgo(date){
    let rightDate = new Date(date)
    let seconds = Math.floor((today - rightDate) / 1000);

  let interval = seconds / 31536000;

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

  return (
    <div className="homepage" style={{width:'100%'}}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Paper>
            {
            recents.map((article) => {
              let date = article.created_at
              let age = howLongAgo(date)
              let capitalized = article.title.split(' ').map(word => {
                return word[0].toUpperCase() + word.substring(1); 
              }).join(' ')
              return( 
              <div key={article.id}>
                <Paper style={{margin:'10px'}}>
                <Link href={`/article/${article.id}`}> <Typography>{capitalized}</Typography></Link>
                  <img src={article.image_url} alt='article thumbnail' style={{maxWidth:'100%'}}/>
                  <Typography variant='small' component='small'>{age} ago</Typography>
                </Paper>
              </div>
              )
            })
            }
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            {
            features.map((article) => {
              let date = article.created_at
              let age = howLongAgo(date)
              let capitalized = article.title.split(' ').map(word => {
                return word[0].toUpperCase() + word.substring(1); 
              }).join(' ')
              return( 
              <div key={article.id}>
                <Paper style={{margin:'10px'}}>
                  <Link href={`/article/${article.id}`}><Typography variant='h5' component='h5'>{capitalized}</Typography>
                  <img src={article.image_url} alt='article thumbnail' style={{width:'100%'}}/></Link>
                  <Typography variant='small' component='small'>{age} ago</Typography>
                </Paper>
              </div>
              )
            })
            }
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            Socials
            </Paper>
        </Grid>

      </Grid>
    </div>
  );
};
