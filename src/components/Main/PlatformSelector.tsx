import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { Platforms } from "../../hooks/usePlatforms";

const PlatformSelector = ({
  placeholderText,
  options,
  onChange,
  onSelectedPlatform,
  selectedPlatform,
}: {
  placeholderText?: string;
  options?: string[];
  onChange?: (selected: string) => void;
  selectedPlatform: Platforms | null;
  onSelectedPlatform: (platform: Platforms) => void;
}) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((d) => (
          <MenuItem key={d.id} onClick={() => onSelectedPlatform(d)}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
