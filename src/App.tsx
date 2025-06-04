import { Announcement } from './components/announcement';
import { Footer } from './components/footer';
import { Header } from './components/header';

export function App() {
  return (
    <>
      <Header />
      <div className="bg-white-dark">
        <Announcement />
      </div>
      <Footer />
    </>
  );
}
