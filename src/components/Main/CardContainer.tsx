import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box width="100%" borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default CardContainer;
