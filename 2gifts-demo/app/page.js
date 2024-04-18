import Ad from "./ad/page";
import Hero from "./hero/page";
import RequestGifts from "./requestGifts/page";



export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <RequestGifts></RequestGifts>
      <Ad></Ad>
    </main>
  );
}
