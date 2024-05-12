import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box p="4" bg="blue.500" color="white">
      <Link as={RouterLink} to="/" mr="4">
        Home
      </Link>
      <Link as={RouterLink} to="/odoo-automation">
        Odoo Automation
      </Link>
    </Box>
  );
}

export default Navigation;
