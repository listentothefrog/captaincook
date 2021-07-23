import logo from "../images/logo-web.svg";

const Header = () => {
  return (
    <div className="font-body flex items-center justify-between w-screen h-16  bg-tan">
      <div className="mt-2 ml-4">
        <img src={logo} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-end w-92 mr-10">
        <div className="flex w-full items-center">
          <div className="mr-10 cursor-pointer hover:underline mt-2 font-normal">
            Login
          </div>
          <div className="mr-10 cursor-pointer hover:underline mt-2 font-normal">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
