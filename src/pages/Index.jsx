import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "laptop.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "smartwatch.jpg" },
  { id: 4, name: "Headphones", price: "$149", image: "headphones.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      <Box as="main" mt={8}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white">
              <Image src={product.image} alt={product.name} mb={4} />
              <VStack spacing={2} align="start">
                <Text fontWeight="bold">{product.name}</Text>
                <Text color="gray.600">{product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;