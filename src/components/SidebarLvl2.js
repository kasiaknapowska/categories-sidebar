import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SidebarLvl3 from "./SidebarLvl3";
import { setLeague, setLeagues, resetGames } from "../redux/leaguesGamesSlice";
import {
  LeagueContainer,
  LeagueName,
  EventsCount,
} from "../styledComponents/styledComponents";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const SidebarLvl2 = ({ parentCategory, dataLvl2, dataLvl3 }) => {
  const dispatch = useDispatch();
  const leagues = useSelector((state) => state.leaguesGames.leagues);
  const leagueClicked = useSelector((state) => state.leaguesGames.league);

  const handleLeagueNameClicked = (id) => {
    dispatch(setLeague(id));
    dispatch(resetGames([]));
    if (!leagues.includes(id)) {
      dispatch(setLeagues(id));
    }
  };

  return (
    <>
      {dataLvl2.map((league) => {
        if (league.parentCategory === parentCategory) {
          return (
            <div key={league.categoryId}>
              <LeagueContainer>
                <LeagueName
                  onClick={() => handleLeagueNameClicked(league.categoryId)}
                  color={leagueClicked === league.categoryId ? "green" : "grey"}
                >
                  {`${league.categoryName.slice(0, 16)}...`}
                  <EventsCount>({league.eventsCount})</EventsCount>{" "}
                </LeagueName>
                {leagues.includes(league.categoryId) ? (
                  <KeyboardArrowDownRoundedIcon
                    onClick={() => dispatch(setLeagues(league.categoryId))}
                    fontSize="small"
                    style={{ fill: "limegreen", transform: "rotate(180deg)" }}
                  />
                ) : (
                  <KeyboardArrowDownRoundedIcon
                    onClick={() => dispatch(setLeagues(league.categoryId))}
                    fontSize="small"
                    style={{ fill: "lightgrey" }}
                  />
                )}
              </LeagueContainer>

              {leagues.includes(league.categoryId) && (
                <SidebarLvl3
                  parentCategory={league.categoryId}
                  dataLvl3={dataLvl3}
                />
              )}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SidebarLvl2;
