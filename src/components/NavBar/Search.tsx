import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="search"
        placeholder="Search games..."
        borderRadius={20}
        variant="filled"
      />
    </InputGroup>
  );
};

export default Search;
