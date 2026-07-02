
import "./globals.css";



export const metadata = {
  title: "Barber Shop",
  description: "Barber Shop - O melhor lugar para cuidar do seu estilo e bem-estar. Agende seu horário e experimente nossos serviços de barbearia de alta qualidade.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
