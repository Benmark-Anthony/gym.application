import React,{useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';




const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);
  


  const handleSearch = async() => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search)
      );


      setSearch('');
      setExercises(searchedExercises);
    
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize:{lg:'44px', xs:"30px"}}} mb='50px' textAlign="center" color="white">
          Awesome Exercises You <br/> Should Check Out.
      </Typography>
        <Box position="relative" mb="72px">
          <TextField 
            sx={{ border:'2px solid red', borderRadius:'4px 0px 0px 4px',
            input:{fontWeight:"700", borderRadius:'4px', border:'none'},
            width:{
              lg:'1000px',
              xs:'350px'
            },
            backgroundColor:"white",
           
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          />
           <Button
           variant="contained"
           className="search-btn"
            sx={{
              bgcolor:'#ff2625',
              padding:'20px',
              color:'#fff',
              textTransform:'none',
              width:{lg:'150px', xs:'80px'},
              fontSize:{lg:'20px', xs:'14px'},
              height:'58px',
              position:"center",
              borderRadius:'0px 4px 4px 0px'
            }}
            onClick={handleSearch}
           > 
            Search
           </Button>
         
        </Box>

            <Box
            sx={{ position: 'relative', width: '100%', p: '20px' }}
            >
              <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
            </Box>
    </Stack>
  );
};

export default SearchExercises;