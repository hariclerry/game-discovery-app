import { Badge } from "@chakra-ui/react";

const CreditScore = ({ score }: { score: number }) => {
  let color = score > 90 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius="4px" fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CreditScore;
