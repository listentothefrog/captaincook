import Image from "next/image";
import logo from "../public/logo-web.svg";
import NextLink from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-screen h-16  bg-tan">
      <div className="mt-2 ml-4">
        <Image src={logo} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-end w-92">
        <div className="flex w-full items-center">
          <NextLink href="/login">
            <div className="mr-10 cursor-pointer hover:underline mt-2">
              Login
            </div>
          </NextLink>
          <NextLink href="/register">
            <div className="mr-10 cursor-pointer hover:underline mt-2">
              Register
            </div>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
