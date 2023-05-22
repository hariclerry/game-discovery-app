import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = ({
  placeholderText,
  options,
  onChange,
}: {
  placeholderText?: string;
  options?: string[];
  onChange?: (selected: string) => void;
}) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((d) => (
          <MenuItem key={d.id}>{d.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
