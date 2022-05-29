import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ChakraProvider } from "@chakra-ui/react";
import Body from "./components/Body";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <HeroSection />
      <Body />
    </ChakraProvider>
  );
}

export default App;
