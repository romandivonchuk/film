import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { FilmModel } from './types/films';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CurrentFilm = () => {
  const [film, setFilm] = useState<FilmModel | null>(null)
  const { id } = useParams<{id?: string}>();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=1269e0bf`)
      .then((res) =>res.json())
      .then((res) => setFilm({...res} as FilmModel))
  }, [id])
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <CardMedia
        component="img"
        style={{height: 500, width: 500}}
        image={film?.Poster}
        alt={film?.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Director: {film?.Director}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {film?.Type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Country: {film?.Country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {film?.Genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Yeer: {film?.Year}
        </Typography>
      </CardContent>
    </div>

  )
}

export default CurrentFilm
