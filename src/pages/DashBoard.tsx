import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavBar } from '../components/navBar/Navbar';
import {FetchInitialEstate} from "../redux/dbRedux/actions"
export const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    (async () => {
      dispatch( await FetchInitialEstate())
    })()
  }, [dispatch]);
  return (
    <>
      <NavBar/>
    <div>DashBoaard</div>
    </>
  )
}

