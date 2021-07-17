import NextHead from "next/head";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex font-body">
      <NextHead>
        <title>CaptainCook</title>
        <meta
          name="description"
          content="Organize your recipies like a pro cook"
        />
        <link rel="icon" href="/logo.svg" />
      </NextHead>
      <Header />
    </div>
  );
};

export default Home;
