import { Container, Grid } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { CardText, CardImage } from '../components/card';
import { NavBar } from '../components/navBar/Navbar';
import { SearchBar } from '../components/search/SearchBar';
import { auth } from '../firebase/config';
import {
  CardTextInfo,
  TitleCard,
} from '../components/card/CardTextInfo';
import {
  queryProperties,
  queryFavorite,
  queryUsers,
} from '../helper/query';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import imagenMia  from "../images/"

// json-server --watch json/Basic.json;

export const Home = () => {
  const [favorite, setFavorite] = useState([]);

  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      navigate('/login');
    }
  });

  useEffect(() => {
    (async () => {
      try {
        const favoriteResponse = await axios.get(
          'http://localhost:3000/favorite'
        );
        const propertiesResponse = await axios.get(
          'http://localhost:3000/properties'
        );
        const properties = favoriteResponse.data.map((item) => {
          if (item.id === 1) {
            return item.propertiesId;
          }

        });

        const favorite = propertiesResponse.data.filter((item) =>
          properties.includes(item.id)
        );
        setFavorite(favorite);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} xl={6}>
            <CardText title={TitleCard.title} body={TitleCard.body} />
          </Grid>
          <Grid item xs={6} md={6} xl={6}>
            <SearchBar />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            xl={12}
            sx={{ backgroundColor: 'red' }}
          >
            <CardText
              title={CardTextInfo.title}
              body={CardTextInfo.body}
            >
              {favorite.map((item) => (
                <CardImage
                  province={item.province}
                  description={item.country}
                  price={item.price}
                  image={item.image}
                  key={item.id}
                ></CardImage>
              ))}
            </CardText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
