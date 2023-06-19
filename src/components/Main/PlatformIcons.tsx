import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Game } from "../../types/Game";
import { IconType } from "react-icons";

const PlatformIcons = ({
  platforms,
}: {
  platforms: Game["parent_platforms"];
}) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms &&
        platforms.map(({ platform }) => (
          <Icon
            as={iconMap[platform.slug]}
            color="purple.500"
            key={platform.id}
          />
        ))}
    </HStack>
  );
};

export default PlatformIcons;
