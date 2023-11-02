import { Html,Head,  Main, NextScript } from "next/document";
// import Head from "next/head";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <script defer src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script defer src="@/lib/wow/wow.min.js"></script>
        <script defer src="@/lib/easing/easing.min.js"></script>
        <script defer src="@/lib/waypoints/waypoints.min.js"></script>
        <script defer src="@/lib/counterup/counterup.min.js"></script>
        <script defer src="@/lib/owlcarousel/owl.carousel.min.js"></script>
        <script defer src="@/lib/tempusdominus/js/moment.min.js"></script>
        <script defer src="@/lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script defer src="@/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
        <script defer src="bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
