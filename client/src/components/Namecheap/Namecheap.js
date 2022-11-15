import React from "react";
import { Container, Typography } from "@mui/material";
import { namecheapApi } from "../../api/namecheap";

import NameCheapForm from "./NameCheapForm";

const Namecheap = () => {
  const changeNsRequest = (params) => {
    namecheapApi
      .get(`/api/change-ns/?${params}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.status === "error") {
          console.log(data.error);
          return;
        }
        console.log(data.status);
      })
      .catch((err) => console.log(err.message));
  };

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
