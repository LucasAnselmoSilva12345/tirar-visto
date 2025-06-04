import { Announcement } from './components/announcement';
import { Footer } from './components/footer';

export function App() {
  return (
    <>
      <div className="bg-white-dark">
        <Announcement />
      </div>
      <Footer />
    </>
  );
}
