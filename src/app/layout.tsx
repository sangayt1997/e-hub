import type { Metadata } from 'next';
import './stylesheets/global.scss';
import { poppins_bold, poppins_medium, poppins_regular } from '../fonts/fonts';

export const metadata: Metadata = {
  title: 'e-hub - Your Gateway to Gadgetry Galore!',
  description: 'Your Gateway to Gadgetry Galore!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${poppins_regular.variable} ${poppins_medium.variable} ${poppins_bold.variable}`}>
      <body>{children}</body>
    </html>
  )
}
