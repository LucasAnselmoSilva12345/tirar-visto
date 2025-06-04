import { Newsletter } from './newsletter';
import { SocialLinks } from './social-links';

export function Footer() {
  return (
    <footer>
      <Newsletter />
      <SocialLinks />
      <span className="block text-center border-t border-white-light py-7 text-sm font-medium text-black-dark">
        © 2025 Tirar Visto - Todos os Direitos Reservados
      </span>
    </footer>
  );
}
