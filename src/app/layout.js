import "./globals.css";

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
        <script src="../utils/fbpixel.js"></script>

        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2574515696062708&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
