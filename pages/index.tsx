import type { ReactElement } from "react";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return <Link href="/about">About</Link>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
