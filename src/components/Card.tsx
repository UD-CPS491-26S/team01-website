import { Box, Stack } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface CardProps extends BoxProps {
  children: ReactNode;
}

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <Box
      p="6"
      borderWidth="1px"
      borderRadius="xl"
      bg="white"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ boxShadow: "md", borderColor: "blue.300" }}
      {...rest}
    >
      <Stack gap="4">
        {children}
      </Stack>
    </Box>
  );
};

export default Card;
