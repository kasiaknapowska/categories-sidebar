import React, { useState } from "react";
import { useSelector } from "react-redux";
import SidebarLvl2 from "./SidebarLvl2";
import {
  SidebarContainer,
  CategoryContainer,
  CategoryName,
  EventsCount,
} from "../styledComponents/styledComponents";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Sidebar = () => {
  const [showEsports, setShowEsports] = useState(false);
  const [showLvl2, setShowLvl2] = useState(null);
  const eSports = useSelector((state) => state.categories.eSports);
  const sports = useSelector((state) => state.categories.sports);

  const handleClick = (category) => {
    if (showLvl2 === category) {
      setShowLvl2(null);
    } else {
      setShowLvl2(category);
    }
  };

  return (
    <SidebarContainer>
      {sports &&
        sports.lvl1.map((sport) => {
          return (
            <div key={sport.categoryId}>
              <CategoryContainer onClick={() => handleClick(sport.categoryId)}>
                <CategoryName>
                  {sport.categoryName}
                  <EventsCount>({sport.eventsCount})</EventsCount>
                </CategoryName>{" "}
                {showLvl2 === sport.categoryId ? (
                  <KeyboardArrowDownRoundedIcon
                    fontSize="small"
                    style={{ fill: "limegreen", transform: "rotate(180deg)" }}
                  />
                ) : (
                  <KeyboardArrowDownRoundedIcon
                    fontSize="small"
                    style={{ fill: "lightgrey" }}
                  />
                )}
              </CategoryContainer>

              {showLvl2 === sport.categoryId && (
                <SidebarLvl2
                  parentCategory={sport.categoryId}
                  dataLvl2={sports.lvl2}
                  dataLvl3={sports.lvl3}
                />
              )}
            </div>
          );
        })}

      <CategoryContainer onClick={() => setShowEsports(!showEsports)}>
        <CategoryName>
          Esport
          <EventsCount>
            (
            {eSports.lvl2
              .map((el) => el.eventsCount)
              .reduce((total, item) => total + item)}
            )
          </EventsCount>
        </CategoryName>{" "}
        {showEsports === true ? (
          <KeyboardArrowDownRoundedIcon
            fontSize="small"
            style={{ fill: "limegreen", transform: "rotate(180deg)" }}
          />
        ) : (
          <KeyboardArrowDownRoundedIcon
            fontSize="small"
            style={{ fill: "lightgrey" }}
          />
        )}
      </CategoryContainer>
      {showEsports &&
        eSports &&
        eSports.lvl1.map((eSport) => {
          return (
            <div key={eSport.categoryId}>
              <CategoryContainer onClick={() => handleClick(eSport.categoryId)}>
                <CategoryName>
                  {eSport.categoryName}{" "}
                  <EventsCount>({eSport.eventsCount})</EventsCount>
                </CategoryName>{" "}
                {showLvl2 === eSport.categoryId ? (
                  <KeyboardArrowDownRoundedIcon
                    fontSize="small"
                    style={{ fill: "limegreen", transform: "rotate(180deg)" }}
                  />
                ) : (
                  <KeyboardArrowDownRoundedIcon
                    fontSize="small"
                    style={{ fill: "lightgrey" }}
                  />
                )}
              </CategoryContainer>
              {showLvl2 === eSport.categoryId && (
                <SidebarLvl2
                  parentCategory={eSport.categoryId}
                  dataLvl2={eSports.lvl2}
                  dataLvl3={eSports.lvl3}
                />
              )}
            </div>
          );
        })}
    </SidebarContainer>
  );
};

export default Sidebar;
