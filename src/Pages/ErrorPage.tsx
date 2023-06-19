import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box p={5}>
      <Heading>Ooops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "Page does not exist"
          : "An unexpected error Occurred"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
