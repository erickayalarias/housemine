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
import { useDispatch, useSelector } from 'react-redux';
import {
  FetchInitialEstate,
  Province,
} from '../redux/dbRedux/actions';

// import imagenMia  from "../images/"

// json-server --watch json/Basic.json;

export const Home = () => {
  const dispatch = useDispatch();
  const [province, setProvince] = useState('');
  const data = useSelector(
    (state) => state.reducerRealEstate.provinces
  );
  console.log(data);
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(user);
    } else {
      navigate('/login');
    }
  });

  useEffect(() => {
    console.log(data);
    (async () => {
      try {
        const favoriteResponse = await axios.get(
          'http://localhost:3000/favorite'
        );
        const propertiesResponse = await axios.get(
          'http://localhost:3000/properties'
        );
        let dataProvince = [];
        propertiesResponse.data.forEach((element) => {
          if (!dataProvince.includes(element.province)) {
            dataProvince.push(element.province);
          }
        });
        dispatch(Province(dataProvince));
        setProvince(dataProvince);

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
      await FetchInitialEstate();
    })();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} xl={6}>
            <CardText
              title={TitleCard.title}
              body={TitleCard.body}
              height={500}
            />
          </Grid>
          <Grid item xs={6} md={6} xl={6}>
            <SearchBar province={province} dashboard={'home'} />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
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
