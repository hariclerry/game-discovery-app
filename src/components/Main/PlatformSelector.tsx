import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatformLookup from "../../hooks/usePlatformLookup";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQuery from "../../store/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  // Pass a selector to zustand to prevent re-render incase any changes from other component
  const setSelectedPlatformId = useGameQuery((s) => s.setPlatformId);
  const platformId = useGameQuery((s) => s.gameQuery.platformId);
  if (error) return null;

  const selectedPlatform = usePlatformLookup(platformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((d) => (
          <MenuItem key={d.id} onClick={() => setSelectedPlatformId(d.id)}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
