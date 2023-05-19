import { Box, Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box width="400px" borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default CardContainer;
