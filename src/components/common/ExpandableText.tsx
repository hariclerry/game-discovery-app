import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

const ExpandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <div>
      <Text>
        {summary}{" "}
        <Button
          size="xs"
          ml={1}
          fontWeight="bold"
          colorScheme="green"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read More"}
        </Button>
      </Text>
    </div>
  );
};

export default ExpandableText;
