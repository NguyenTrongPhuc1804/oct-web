import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Redux/Ducks/UserDux";
import { useToast } from "@chakra-ui/react";

import Header from "./components/layout/Header";
import Home from "./components/screen/Home";
import NotFoundScreen from "./components/screen/NotFoundScreen";
import Footer from "./components/layout/Footer";
import Loading from "./components/widgets/Loading";

import News from "./components/screen/News";
import Header1 from "./components/layout/Header1";

function App() {
  const dispatch = useDispatch();
  //Selectors
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.notify.visible);
  const toastContent = useSelector((state) => state.notify.toast);
  const toast = useToast();

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("KalaLoginData"));
      if (user !== null) {
        console.log("set user from local");
        dispatch(setUser(user));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (toastContent !== null) {
      toast(toastContent);
    }
  }, [toastContent, toast]);

  return (
    <Router>
      <Header1 />
      <Loading isOpen={loading} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<NotFoundScreen title={"404 Not found!"} />} />
        <Route path="/news/:skip/:limit" element={<News />} />
        {/* {token !== null ? (
          <Route path="/administrator/:name" element={<AdminScreen />} />
        ) : null} */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
