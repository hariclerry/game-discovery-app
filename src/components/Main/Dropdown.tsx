import { FormControl, Select } from "@chakra-ui/react";

const Dropdown = ({
  placeholderText,
  options,
  onChange,
}: {
  placeholderText: string;
  options: string[];
  onChange: () => void;
}) => {
  return (
    <FormControl>
      <Select placeholder={placeholderText}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
