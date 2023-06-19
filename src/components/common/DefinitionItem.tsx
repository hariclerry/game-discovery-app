import { Box, Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

const DefinitionItem = ({
  content,
  title,
}: {
  content: ReactNode;
  title: string;
}) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="xl" color="gray">
        {title}
      </Heading>
      <dd>{content}</dd>
    </Box>
  );
};

export default DefinitionItem;
