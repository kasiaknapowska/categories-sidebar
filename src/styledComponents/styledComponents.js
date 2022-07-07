import styled from "styled-components";

export const SidebarContainer = styled("div")`
  width: 14rem;
  font-family: "Roboto", sans-serif;
  margin: 1rem;
  padding: .8rem;
  background-color: white;
`;
export const CategoryContainer = styled("div")`
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CategoryName = styled("span")`
  color: grey;
  font-weight: 500;
`;
export const EventsCount = styled("span")`
  color: lightgrey;
  font-weight: 300;
  margin-left: 0.3rem;
`;
export const LeagueContainer = styled("div")`
  font-size: 0.7rem;
  color: lightgrey;
  cursor: pointer;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeagueName = styled("span")`
  color: ${(props) => (props.color === "green" ? "limegreen" : "grey")};
  font-weight: 500;
`;
export const GameContainer = styled("div")`
  font-size: 0.7rem;
  color: grey;
  cursor: pointer;
  padding: 0.3rem 0;
  width: 11.8rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const GameName = styled("span")`
  color: ${(props) => (props.color === "green" ? "limegreen" : "grey")};
  font-weight: 300;
  display: flex;
  align-items: center;
  height: 1.3rem;
`;
