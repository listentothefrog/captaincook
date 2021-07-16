import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo-web.svg";

const Home = () => {
  return (
    <div className="flex">
      <Head>
        <title>CaptainCook</title>
        <meta
          name="description"
          content="Organize your recipies like a pro cook"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex items-center justify-between w-screen h-2/6">
        <div className="mt-2 ml-2">
          <Image src={logo} />
        </div>
        <div className="flex items-center justify-end w-92 mr-10">
          <div className="flex w-full">
            <div className="mr-10 cursor-pointer hover:underline text-lg">
              login
            </div>
            <div className="cursor-pointer hover:underline text-lg ">
              register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
