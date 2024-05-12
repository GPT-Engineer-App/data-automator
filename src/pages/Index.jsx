import { Container, VStack, Heading, Text, Button, Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaDatabase, FaChartLine, FaCogs, FaTools } from "react-icons/fa";

const DashboardCard = ({ title, icon, description }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor} _hover={{ bg: hoverBgColor }} transition="background-color 0.3s" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box as={icon} size="3em" />
      <Heading fontSize="xl" mt={4} mb={2}>
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Data Management Dashboard
        </Heading>
        <Text fontSize="lg">Centralize and automate your data management tasks. Monitor, analyze, and optimize your data processes from one dashboard.</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <DashboardCard title="Data Sources" icon={FaDatabase} description="Manage and connect to various data sources efficiently." />
          <DashboardCard title="Analytics" icon={FaChartLine} description="Visualize and analyze data trends to make informed decisions." />
          <DashboardCard title="Automation" icon={FaCogs} description="Automate repetitive data processing tasks to save time." />
          <DashboardCard title="Configuration" icon={FaTools} description="Configure and maintain data management settings easily." />
        </SimpleGrid>
        <Button colorScheme="blue" size="lg">
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
