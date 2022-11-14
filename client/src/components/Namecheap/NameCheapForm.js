import React, { useRef } from "react";
import { Button, TextField, Paper } from "@mui/material";

const NameCheapForm = (props) => {
  const { changeNsRequest } = props;
  const textFieldsVariant = "outlined";

  const accountLoginRef = useRef();
  const apiKeyRef = useRef();
  const domainsListRef = useRef();
  const ns1Ref = useRef();
  const ns2Ref = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const accountLoginValue = accountLoginRef.current.value.trim();
    const apiKeyValue = apiKeyRef.current.value.trim();
    const domainsListValue = domainsListRef.current.value.trim();
    const ns1Value = ns1Ref.current.value.trim();
    const ns2Value = ns2Ref.current.value.trim();
    const domainsArray = domainsListValue
      .split("\n")
      .filter((string) => string.trim() !== "");
    for (const el of domainsArray) {
    }

    changeNsRequest();
  };

  return (
    <Paper
      variant="outlined"
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 3 },
        my: { xs: 3, md: 6 },
        p: { xs: 2, md: 3 },
      }}
      onSubmit={onSubmitHandler}
    >
      <TextField
        required
        id="accountLogin"
        name="accountLogin"
        label="Account Login"
        placeholder="Логин вашего аккаунта"
        fullWidth
        autoComplete="given-name"
        variant={textFieldsVariant}
        inputRef={accountLoginRef}
      />
      <TextField
        required
        id="apiKey"
        name="apiKey"
        label="Api Key"
        placeholder="Global API Key аккаунта"
        fullWidth
        autoComplete="given-name"
        variant={textFieldsVariant}
        inputRef={apiKeyRef}
      />
      <TextField
        sx={{ mt: 2 }}
        multiline
        required
        id="domainsList"
        name="domainsList"
        label="Список доменов"
        placeholder="Каждый домен с новой строки: domain.com"
        rows={10}
        fullWidth
        autoComplete="given-name"
        variant={textFieldsVariant}
        inputRef={domainsListRef}
      />
      <TextField
        required
        id="ns1"
        name="ns1"
        label="ns1"
        placeholder="Например: ns1.cloudflare.com"
        fullWidth
        autoComplete="given-name"
        variant={textFieldsVariant}
        inputRef={ns1Ref}
      />
      <TextField
        required
        id="ns2"
        name="ns2"
        label="ns2"
        placeholder="Например: ns2.cloudflare.com"
        fullWidth
        autoComplete="given-name"
        variant={textFieldsVariant}
        inputRef={ns2Ref}
      />
      <Button sx={{ mt: 2 }} variant="contained" type="submit">
        Изменить
      </Button>
    </Paper>
  );
};

export default NameCheapForm;
