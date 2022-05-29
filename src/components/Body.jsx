import React from "react";
import { Box, Image, Container, Heading, Link, Text } from "@chakra-ui/react";
import "../static/body.css";

export default function Body() {
  return (
    <Container maxW="max-width" align="center">
      <Heading padding="10px" as="h1" fontSize="60px">
        About Me
      </Heading>
      <Box boxSize="md" float="left" padding="10px">
        <Image src="./nishant.jpg"></Image>
      </Box>
      <Text fontSize="18px" maxWidth="50%">
        Hello! This is Nishant. Currently I live in Damak,Nepal. I like to do
        computer programs while listening to music. Right now, I'm studying
        Computer Science & Engineering in{" "}
        <Link href="https://mbman.edu.np" isExternal color="teal.500">
          Madan Bhandari Memorial Academy Nepal,Urlabari
        </Link>
        . I love computers.I love programming. Since my very childhood I have
        some kind of feelings toward computers. Most of my time is passed in
        front of my computer exploring new things. I love to learn new things.
        Like everyone I am also interested in Machine Learning, Deep Learning,
        Data Science. Currently Learning ReactJS, maybe making some silly
        mistakes down the road but ultimately I'm learning Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatum quasi magni aliquid sed,
        ipsam earum at, ullam sint eligendi, laudantium dolorem? Nisi facilis
        debitis omnis aperiam culpa enim magnam nam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eveniet explicabo veniam, laborum
        delectus, perspiciatis voluptates, exercitationem inventore magni
        impedit officiis suscipit ea! Beatae odit doloribus magni soluta iusto,
        aperiam quasi? Incidunt non totam in, eligendi esse quisquam.
        Consequuntur cumque molestias in nihil delectus. Quia excepturi,
        voluptatibus quaerat rem explicabo deleniti? Excepturi eos repellendus
        ipsam laborum tempora commodi veniam voluptate doloremque. Porro alias
        iste dolorum, sequi beatae quibusdam totam? Ut est libero nihil
        doloremque eius excepturi explicabo blanditiis atque, dolorem laborum
        illo obcaecati perspiciatis necessitatibus ullam, ratione enim eaque sit
        fuga. Ab, incidunt! Assumenda, nam cum asperiores laudantium magnam
        praesentium, minima, unde facilis aliquam iusto enim eius perspiciatis
        alias. Doloribus optio quas accusantium at, neque iusto vel quia
        nesciunt placeat? Laborum? Consectetur at dolores quos assumenda
        praesentium tempora temporibus quam impedit aliquid optio, quasi quas
        minima illum delectus facilis tenetur nihil iure veniam quibusdam
        commodi labore, similique vel. Dolore, non soluta.
      </Text>
    </Container>
  );
}
