
import "./globals.css";


export const metadata = {
  title: "Frío delirio",
  icons: {
    icon: "/logo_frio_delirio.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}