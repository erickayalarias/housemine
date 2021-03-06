import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import { CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { readSearch } from '../../redux/dbRedux/actions';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({
  province,
  defaulImage = '',
  dashboard = 'dashboard',
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [value, setValue] = useState<String | null>(null);
    const [Image, setImage] = useState<Number>()
  const onhandleChange = (event: any, newValue: string | null) => {
    dispatch(readSearch(newValue));
    if (dashboard !== 'dashboard') {
      navigate('/dashboard');
    }
    return setValue(newValue);
    };
    useEffect(() => { 
        if (defaulImage !== "") {
            setImage(200)
        } else {
            setImage(500)
            }
    },[])
  return (
      <Card sx={{ maxWidth: 500, height: `${Image}`, pt: 5, pb: 1 }}>
      <Stack spacing={1}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          onChange={onhandleChange}
          options={province}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label={<SearchIcon />}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            );
          }}
          value={value}
        />
      </Stack>
      {defaulImage !== '' ? (
        <CardMedia
          component="img"
          height="500"
          image="../../images/HouseMine.jpg"
          alt="green iguana"
        />
      ) : (
        ''
      )}
    </Card>
  );
};
