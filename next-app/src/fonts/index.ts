import { Dosis, Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-orbitron',
});

const dosis = Dosis({
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-dosis',
});

export { dosis, orbitron };
