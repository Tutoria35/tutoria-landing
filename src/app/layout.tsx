import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tutoria - Herramientas de Investigación',
  description: 'Las mejores herramientas para tu tesis en un solo lugar y a precio de estudiante.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
