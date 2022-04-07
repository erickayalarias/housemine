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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardImage, CardText } from '../components/card';
import { NavBar } from '../components/navBar/Navbar';
import { FetchInitialEstate } from '../redux/dbRedux/actions';
import { CardTextSelected } from '../components/card/CardTextInfo';
import { SearchBar } from '../components/search/SearchBar';

export const DashBoard = () => {
  const data = useSelector((state) => state.reducerRealEstate);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log(data);
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
                        name="1"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="2"
                        name="2"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="3"
                        name="3"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="4"
                        name="4"
                        onClick={handleClick}
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
                        name="1"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="2"
                        name="2"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="3"
                        name="3"
                        onClick={handleClick}
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
                      <Grid container spacing={1}>
                        <Grid item xs={6} md={6} xl={6}>
                          <TextField
                            id="outlined-basic"
                            label="Min. "
                            name="minPrice"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={6} md={6} xl={6}>
                          <TextField
                            id="outlined-basic"
                            label="Max."
                            name="maxPrice"
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                      <Slider
                        aria-label="Price Range"
                        name="price"
                        defaultValue={200000}
                        valueLabelDisplay="auto"
                        step={1000}
                        marks
                        min={40000}
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
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Lift"
                        name="lift"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Garden"
                        name="garden"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Air Conditioning"
                        name="air"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Swimming Pool"
                        name="pool"
                        onClick={handleClick}
                      />
                    </Grid>
                    <Grid item xs={6} md={6} xl={6}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Terrace"
                        name="terrace"
                        onClick={handleClick}
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
