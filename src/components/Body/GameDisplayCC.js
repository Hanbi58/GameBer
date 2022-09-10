import classes from "./GameDisplayCC.module.css";
import GamePresent from "./GamePresent";
import GameInput from "./GameInput";
const GAMES = [
  {
    id: "m1",
    name: "Grand Thief Auto V",
    publisher: "Rockstar Games.",
    price: 22.99,
    imgurl: "https://www.rwongphoto.com/images/xl/RW7471_web.jpg",
  },
  {
    id: "m2",
    name: "War Thunder",
    publisher: "Gaijin Entertainment",
    price: 16.5,
    imgurl: "https://pbs.twimg.com/media/EnHL4O8XYAAyY_k?format=jpg&name=large",
  },
  {
    id: "m3",
    name: "Conan Exiles",
    publisher: "Funcom",
    price: 12.99,
    imgurl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202010/2613/LGQ5Hte6wwXflhdstRDe1Ij1.jpg",
  },
  {
    id: "m4",
    name: "World of Warcraft",
    publisher: "Blizzard Entertainment.",
    price: 18.99,
    imgurl:
      "https://www.gamespace.com/wp-content/uploads/2022/08/World-of-Warcraft-Wrath-of-the-Lich-King-Classic-Pre-Patch-is-Here.png",
  },
];

const GameDisplayCC = () => {
  return GAMES.map((game) => (
    <div
      key={game.id}
      className={classes.gameDisplay}
      style={{
        backgroundImage: `url(
        "${game.imgurl}"
      )`,
      }}
    >
      <GamePresent game={game} />
      <GameInput game={game} />
    </div>
  ));
};

export default GameDisplayCC;
