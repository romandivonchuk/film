import React, {useEffect, useState} from 'react';
import { useActions } from '../src/hooks/useActions'
import { useTypedSelector } from '../src/hooks/useTypeSelector'
import './Films.css'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import ItemFilm from './ItemFilm';


function Films() {
  const {films, error, loading} = useTypedSelector(state => state.films)
  const [searchInput, setsearchInput] = useState('');
  const {fetchFilms} = useActions();

  return (
    <div className="films">
      <div>
        <Grid container>
          <Grid item>
            <TextField  label="enter movie title:" variant="outlined" value={searchInput} onChange={(e) => setsearchInput(e.target.value)} /> 
          </Grid>

          <Grid item style={{ display: "flex" }}>
            <Button disabled={searchInput !== "" ? false : true}variant="contained" onClick={() => fetchFilms(searchInput)}>Search</Button>
          </Grid>
        </Grid>
      </div>
      <div className="searchResult" >
        {films.length > 0 ? films.map(film =>{
          return (
            
              <ItemFilm {...film}/>
            
            )
        }) : null}
      </div>
    </div>
  );
}

export default Films;


