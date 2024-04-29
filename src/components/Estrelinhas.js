import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import { BorderAllOutlined } from '@material-ui/icons';

// Estilizando o componente Rating
const StyledRating = styled(Rating)({
    '& .MuiRating-iconEmpty': {
      color: '#fff', // Define a cor da borda das estrelas vazias como branco

    },
  });

export default function Estrelinhas(props) {
  

  return (
    <Box
      sx={{
        '& > .MuiRating-root': {
          fontSize: 60, // Define o tamanho da fonte para aumentar o tamanho das estrelas
        },
      }}
    >
      <StyledRating
        defaultValue={0}
        precision={0.5} 
        size='large'
        name="simple-controlled"
        value={props.estrelas}
        onChange={(event, newValue) => {
          props.setEstrelas(newValue);
        }}
      />
    </Box>
  );
}
