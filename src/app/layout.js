import "./globals.css";
import Script from 'next/script'

export const metadata = {
  title: "Samie Azubike | Software Engineer",
  description: "Java Backend / FullStack Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <Script src="../utils/fbpixel.js"></Script>
        
      </head>
      <body>{children}</body>
    </html>
  );
}
