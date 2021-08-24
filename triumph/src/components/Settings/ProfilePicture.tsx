import { Box, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/firebase";

const ProfilePictureComponent = () => {
  const [user] = useAuthState(auth);

  const email = user?.email;
  const name = email?.substring(0, email.indexOf("@"));

  return (
    <Box width={"150px"} height={"150px"} border={"solid"} borderRadius={"50%"}>
      <Image
        width={"100%"}
        height={"90%"}
        src={`https://avatars.dicebear.com/api/micah/:${name}.svg`}
      />
    </Box>
  );
};

export default ProfilePictureComponent;
