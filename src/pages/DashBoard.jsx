import {
  Card,
  Container,
  Grid,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Slider,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardImage, CardText } from '../components/card';
import { NavBar } from '../components/navBar/Navbar';
import { FetchInitialEstate } from '../redux/dbRedux/actions';
import { CardTextSelected } from '../components/card/CardTextInfo';
import { SearchBar } from '../components/search/SearchBar';
import axios from 'axios';
import { queryProperties } from '../helper/query';

export const DashBoard = () => {
  const data = useSelector((state) => state.reducerRealEstate);
  const [value, setValue] = useState([40000, 150000]);
  const [query, setQuery] = useState(data.realstate);
  const [inputValue, setinputValue] = useState({
    room1: false,
    room2: false,
    room3: false,
    room4: false,
    bath1: false,
    bath2: false,
    bath3: false,
    pet: false,
    lift: false,
    garden: false,
    air_conditioning: false,
    swimming_pool: false,
    terrace: false,
  });
  const handleChangeAll = ({
    target: { name, checked, innerText },
  }) => {
    console.log(innerText);
    setinputValue({
      ...inputValue,
      [name]: checked,
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let allValues = [];
        Object.keys(inputValue).forEach((element) => {
          if (inputValue[element]) {
            allValues.push(`${element}=${inputValue[element]}&`);
          }
        });
        let dataMia = '';
        allValues.forEach((element) => {
          if (
            element === 'room1=true&' ||
            element === 'room2=true&' ||
            element === 'room3=true&' ||
            element === 'room4=true&' ||
            element === 'bath1=true&' ||
            element === 'bath2=true&' ||
            element === 'bath3=true&'
          ) {
            let probando = element.replace(
              element,
              `${element.slice(0, 4)}=${element.slice(4, 5)}&`
            );
            element = probando;
          }
          dataMia += element;
        });
        const response = await axios.get(
          `http://localhost:3000/properties?${dataMia}`
        );
        setQuery(response.data);
        console.log(query);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [inputValue]);

  useEffect(() => {
    (async () => {
      dispatch(await FetchInitialEstate());
    })();
  }, [dispatch]);
  const handleClick = (e) => {
    const result = {
      name: e.target.name,
      checked: e.target.checked,
    };
    console.log(result);
    return result;
  };
  return (
    <>
      <NavBar />
      <Container>
        <Card>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} xl={12}>
                <SearchBar province={data.provinces} />
              </Grid>
              <Grid item xs={6} md={6} xl={12}>
                <FormGroup>
                  <Grid container spacing={6} direction="row">
                    <Typography
                      variant="subtitle1"
                      sx={{ pt: 7, pl: 7 }}
                    >
                      Bedrooms
                    </Typography>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="1"
                        name="room1"
                        onClick={handleChangeAll}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="2"
                        name="room2"
                        onClick={handleChangeAll}
                      />

                      <FormControlLabel
                        control={<Checkbox />}
                        label="3"
                        name="room3"
                        onClick={handleChangeAll}
                      />

                      <FormControlLabel
                        control={<Checkbox />}
                        label="4"
                        name="room4"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Typography
                      variant="subtitle1"
                      sx={{ pt: 3, pl: 3 }}
                    >
                      Bathrooms
                    </Typography>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="1"
                        name="bath1"
                        onClick={handleChangeAll}
                      />

                      <FormControlLabel
                        control={<Checkbox />}
                        label="2"
                        name="bath2"
                        onClick={handleChangeAll}
                      />

                      <FormControlLabel
                        control={<Checkbox />}
                        label="3"
                        name="bath3"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                  </Grid>
                </FormGroup>
              </Grid>
              <Grid item xs={6} md={6} xl={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ pt: 3, pb: 2, pl: 3 }}
                >
                  Price range
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ pt: 3, pb: 2, pl: 3 }}
                >
                  <Grid item xs={6} md={6} xl={6}>
                    <Grid container spacing={7}>
                      <Grid item xs={6} md={6} xl={6}>
                        <TextField
                          id="outlined-basic"
                          name="minPrice"
                          variant="outlined"
                          value={`€ ${value[0]} `}
                          sx={{ width: '105px' }}
                        />
                      </Grid>
                      <Grid item xs={6} md={6} xl={6}>
                        <TextField
                          id="outlined-basic"
                          name="maxPrice"
                          variant="outlined"
                          value={`€ ${value[1]} `}
                          sx={{ width: '105px' }}
                        />
                      </Grid>
                    </Grid>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      min={30000}
                      max={1000000}
                      sx={{ pt: 6 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <FormGroup>
                  <Typography
                    variant="subtitle1"
                    sx={{ pt: 1, pl: 5, pr: 7 }}
                  >
                    More Filters
                  </Typography>
                  <Grid item xs={6} md={6} xl={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Pets Allowed"
                      name="pet"
                      onClick={handleChangeAll}
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Lift"
                      name="lift"
                      onClick={handleChangeAll}
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Garden"
                      name="garden"
                      onClick={handleChangeAll}
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Air Conditioning"
                      name="air_conditioning"
                      onClick={handleChangeAll}
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Swimming Pool"
                      name="swimming_pool"
                      onClick={handleChangeAll}
                    />

                    <FormControlLabel
                      control={<Checkbox />}
                      label="Terrace"
                      name="terrace"
                      onClick={handleChangeAll}
                    />
                  </Grid>
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <Grid container spacing={2}>
          <CardText
            title={CardTextSelected.title}
            body={CardTextSelected.body}
          />
          {query.map((item) => (
            <Grid item xs={3} md={3} xl={3} key={item.id}>
              <CardImage
                province={item.province}
                description={item.country}
                price={item.price}
                image={item.image}
                key={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
