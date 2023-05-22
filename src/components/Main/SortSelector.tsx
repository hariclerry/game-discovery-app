import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { Platforms } from "../../hooks/usePlatforms";

const SortSelector = ({
  onSelectedPlatform,
  selectedPlatform,
}: {
  selectedPlatform?: Platforms | null;
  onSelectedPlatform?: (platform: Platforms) => void;
}) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {data.map((d) => (
          <MenuItem
            key={d.id}
            onClick={() => onSelectedPlatform && onSelectedPlatform(d)}
          >
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
