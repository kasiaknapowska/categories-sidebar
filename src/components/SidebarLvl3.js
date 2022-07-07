import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGames, resetLeague } from "../redux/leaguesGamesSlice";
import {
  GameContainer,
  GameName,
  EventsCount,
} from "../styledComponents/styledComponents";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

const SidebarLvl3 = ({ parentCategory, dataLvl3 }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.leaguesGames.games);
  const [showStar, setShowStar] = useState(null);

  const onInputChange = (id) => {
    dispatch(setGames(id));
    dispatch(resetLeague());
  };

  return (
    <div>
      {dataLvl3.map((game) => {
        if (game.parentCategory === parentCategory) {
          return (
            <GameContainer
              key={game.categoryId}
              onMouseEnter={() => setShowStar(game.categoryId)}
              onMouseLeave={() => setShowStar(null)}
            >
              <GameName
                color={games.includes(game.categoryId) ? "green" : "grey"}
              >
                <input
                  style={{ marginRight: ".5rem" }}
                  type="checkbox"
                  checked={games.includes(game.categoryId) ? true : false}
                  onChange={() => onInputChange(game.categoryId)}
                />
                {`${game.categoryName.slice(0, 16)}...`}
                <EventsCount>({game.eventsCount})</EventsCount>
              </GameName>

              {showStar === game.categoryId && (
                <StarBorderRoundedIcon
                  fontSize="small"
                  style={{ fill: "lightgrey" }}
                />
              )}
            </GameContainer>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SidebarLvl3;
