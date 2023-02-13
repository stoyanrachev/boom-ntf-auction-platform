import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";

export default function Index() {
  return (
    <>
      <Header />

      <Featured
        items={[
          {
            image:
              "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
            title: "Breakfast",
            rows: 2,
            cols: 3,
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
            title: "Burger",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
            title: "Camera",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
            title: "Coffee",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
            title: "Hats",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
            title: "Honey",
            href: "/about",
          },
          {
            image:
              "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
            title: "Basketball",
            href: "/about",
          },
        ]}
      />

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
            description:
              "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
          },
          {
            title: "Crypto Wallet",
            description:
              "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
          },
          {
            title: "BUM.",
            description:
              "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. ",
          },
        ]}
        link="https://app.boom.dev"
      />
      <Footer />
    </>
  );
}
