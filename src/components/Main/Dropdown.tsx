import { FormControl, Select } from "@chakra-ui/react";

const Dropdown = ({
  placeholderText,
  options,
  onChange,
}: {
  placeholderText: string;
  options: string[];
  onChange: (selected: string) => void;
}) => {
  return (
    <FormControl>
      <Select
        placeholder={placeholderText}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
