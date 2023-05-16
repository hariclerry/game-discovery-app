import { PlusSquareIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, VStack } from "@chakra-ui/react";

const Icons = (iconType: string) => {
  switch (iconType) {
    case "Xbox":
      return <PlusSquareIcon color="red" boxSize={6} />;
    case "PC":
      return <SunIcon color="blue" boxSize={6} />;
    default:
      break;
  }
};

const PlatformIcons = ({ data }: { data: string[] }) => {
  return (
    <HStack w="100%" flex={1}>
      {data.map((d, idx) => (
        <>{Icons(d)}</>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
