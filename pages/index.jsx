import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";

export default function Index() {
  return (
    <>
      <Header />
      <Avatar verified='true' url='/images/avatar.png'/>
    </>
  );
}
