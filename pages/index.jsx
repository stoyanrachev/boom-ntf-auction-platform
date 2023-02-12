import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import How from "../src/components/how/How";

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
      <How
        title="HOW IT WORKS"
        description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        items={[
          {
            title: "Digital Currency",
            description: "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
          },
          {
            title: "Crypto Wallet",
            description: "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
          },
          {
            title: "BUM.",
            description: "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. ",
          },
        ]}
        link="https://app.boom.dev"
      />
      <Footer />
    </>
  );
}
