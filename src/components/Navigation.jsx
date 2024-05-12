import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box p="4" bg="blue.500" color="white">
      <Link as={RouterLink} to="/" mr="4">
        Home
      </Link>
      <Link as={RouterLink} to="/odoo-automation" mr="4">
        Odoo Automation
      </Link>
      <Link as={RouterLink} to="/automation-plan">
        Automation Plan
      </Link>
    </Box>
  );
}

export default Navigation;
