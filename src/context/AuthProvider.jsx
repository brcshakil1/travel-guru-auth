import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  const [places, setPlaces] = useState([]);
  const [booking, setBooking] = useState(null);

  const auth = getAuth(app);

  const bookingPlace = (place) => {
    return setBooking(place);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  console.log(booking);

  const authInfo = {
    places,
    bookingPlace,
    booking,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
