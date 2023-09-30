import useSWR from "swr";
import Navbar from "./navbar";
import Footer from "./footer";
import type { LayoutProps } from "types/Layout";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
