import type { NextPage } from "next";
import Head from "next/head";
import Home from "../views/Home";

const Index: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>krk.finance | zero-fee swap</title>
        <meta
          name="description"
          content="krk.finance | zero-fee swap"
        />
      </Head>
      <Home />
    </div>
  );
};

export default Index;
