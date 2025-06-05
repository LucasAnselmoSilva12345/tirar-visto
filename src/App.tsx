import { Announcement } from './components/announcement';
import { Card } from './components/card';
import { Destinations } from './components/destinations';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Step } from './components/step';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Announcement />
        <Step />
        <Destinations />
        <Card />
      </main>
      <Footer />
    </>
  );
}
