import { Announcement } from './components/announcement';
import { Card } from './components/card';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Step } from './components/step';

export function App() {
  return (
    <>
      <Header />
      <div className="bg-white-dark">
        <Announcement />
      </div>
      <Step />
      <Card />
      <Footer />
    </>
  );
}
