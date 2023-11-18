import useSWR from "swr";
import Navbar from "./navbar";
import Footer from "./footer";
import type { LayoutProps } from "types/Layout";
import Head from "next/head";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Marketplace | Home</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
