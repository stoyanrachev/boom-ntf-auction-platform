import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";

export default function Index() {
  return (
    <>
      <Header />
      <Avatar verified="true" size="50px" url="/images/avatar.png" />
      <User
        name="Elsa"
        info="Im Miner"
        avatar="/images/avatar.png"
        size="53px"
        verified={true}
      />
      <Card />
      <Trending />
      <Auctions />
    </>
  );
}
