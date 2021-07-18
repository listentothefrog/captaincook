import Image from "next/image";
import logo from "../public/logo-web.svg";
import NextLink from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-screen h-16  bg-tan">
      <div className="mt-2 ml-4">
        <NextLink href="/">
          <Image src={logo} className="cursor-pointer" />
        </NextLink>
      </div>
      <div className="flex items-center justify-end w-92 mr-10">
        <div className="flex w-full items-center">
          <div className="mr-10 cursor-pointer hover:underline mt-2">
            Meet the team
          </div>
          <div className="mr-10 cursor-pointer hover:underline mt-2">
            Contact us
          </div>
          <NextLink href="/login">
            <div className="mr-10 cursor-pointer hover:underline mt-2">
              Login
            </div>
          </NextLink>
          <div className="mr-10 cursor-pointer hover:underline mt-2">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
