import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  SearchModel } from './types/films';
import {Link} from 'react-router-dom';

const ItemFilm = (props: SearchModel) => {
  const {Poster,Title,Type,Year,imdbID} = props
  return (
    <Card style={{width: 345, margin: 30 }}>
      <CardMedia
        component="img"
        height="140"
        image={Poster}
        alt={Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/${imdbID}`} size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ItemFilm
