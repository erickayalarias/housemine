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
  const [inputValue, setinputValue] = useState({
    bedroom1: false,
    bedroom2: false,
    bedroom3: false,
    bedroom4: false,
    bathroom1: false,
    bathroom2: false,
    bathroom3: false,
    pet: false,
    lift: false,
    garden: false,
    air: false,
    pool: false,
    terrace: false,
  });
  const handleChangeAll = ({ target: { name, checked } }) => {
    console.log(checked);
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

        const response = await axios.get(
          `http://localhost:3000/properties?${allValues}`
        );
        console.log(response);
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
              <Grid item xs={6} md={6} xl={6}>
                <SearchBar province={data.provinces} />
              </Grid>
              <Grid item xs={6} md={6} xl={6}>
                <FormGroup>
                  <Typography variant="subtitle1">
                    Bedrooms
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="1"
                        name="bedroom1"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="2"
                        name="bedroom2"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="3"
                        name="bedroom3"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="4"
                        name="bedroom4"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle1" sx={{ pt: 3 }}>
                    Bathrooms
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="1"
                        name="bathroom1"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="2"
                        name="bathroom2"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="3"
                        name="bathroom3"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    sx={{ pt: 3, pb: 2 }}
                  >
                    Price range
                  </Typography>
                  <Grid container spacing={2}>
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
                  <Typography variant="subtitle1" sx={{ pt: 1 }}>
                    More Filters
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Pets Allowed"
                        name="pets"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Lift"
                        name="lift"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Garden"
                        name="garden"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Air Conditioning"
                        name="air"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Swimming Pool"
                        name="pool"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Terrace"
                        name="terrace"
                        onClick={handleChangeAll}
                      />
                    </Grid>
                  </Grid>
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        </Card>

        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <CardText
              title={CardTextSelected.title}
              body={CardTextSelected.body}
            >
              {/*               {favorite.map((item) => (
                <CardImage
                  province={item.province}
                  description={item.country}
                  price={item.price}
                  image={item.image}
                  key={item.id}
                ></CardImage>
              ))} */}
            </CardText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
