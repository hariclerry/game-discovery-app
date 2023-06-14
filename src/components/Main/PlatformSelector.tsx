import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatform,
}: {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((d) => (
          <MenuItem key={d.id} onClick={() => onSelectedPlatform(d)}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
