import { Box, Center, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="tomato" w="100vw" h="100vh">
      <Center bg="blue" h="100%" color="white">
        <Text>This is the Center</Text>
      </Center>
    </Box>
  );
}
