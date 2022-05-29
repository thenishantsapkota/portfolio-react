import React from "react";
import {
  Image,
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import "../static/content.css";

export default function Content() {
  return (
    <Container maxW="max-width" align="center" bgColor="gray">
      <Flex padding="10px">
        <Box boxSize="-webkit-fit-content" maxW="md">
          <Stack direction={["column", "row"]} spacing="48  px">
            <Image
              className="content-image"
              boxSize=""
              src="./nishant.png"
              alt="Nishant"
            ></Image>
          </Stack>
        </Box>
        <div className="main-text">
          <Heading
            className="content-heading"
            color="white"
            as="h1"
            noOfLines={3}
          >
            Hello, I am Nishant Sapkota
          </Heading>
          <Text className="content-body">
            Enthusiastic Python Developer eager to contribute to team success
            through hard work, attention to detail.
          </Text>
        </div>
      </Flex>
    </Container>
  );
}
