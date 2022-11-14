import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";

import NameCheapForm from "./NameCheapForm";

const Namecheap = () => {
  const changeNsRequest = () => {};

  return (
    <Container sx={{ p: "5% 10%", textAlign: "center" }} maxWidth="md">
      <Typography variant="h4" component="h2">
        Изменение NS записей на NameCheap
      </Typography>
      <NameCheapForm changeNsRequest={changeNsRequest} />
    </Container>
  );
};

export default Namecheap;
