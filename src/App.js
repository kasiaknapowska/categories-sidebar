import "./App.css";
import React, { useState, useEffect } from "react";
import { getData } from "./fetch/fetchFunc";
import { useDispatch, useSelector } from "react-redux";
import { setSports, setEsports } from "./redux/categoriesSlice";
import Sidebar from "./components/Sidebar";

function App() {
  const eSports = useSelector((state) => state.categories.eSports);
  const sports = useSelector((state) => state.categories.sports);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData((data) => {
      dispatch(setEsports(data.data));
      dispatch(setSports(data.data));
    });
  }, [dispatch]);

  useEffect(() => {
    if (
      sports.lvl1 &&
      sports.lvl2 &&
      sports.lvl3 &&
      eSports.lvl1 &&
      eSports.lvl2 &&
      eSports.lvl3
    ) {
      setShowSidebar(true);
    }
  }, [sports, eSports]);

  return <div className="App">{showSidebar && <Sidebar />}</div>;
}

export default App;
