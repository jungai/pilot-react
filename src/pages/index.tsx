import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services</title>
      </Helmet>
      <h1>{t("msg")}</h1>
      <Box minH="100vh" bg="tomato">
        <p>
          {" "}
          count {"=>"} {count}
        </p>
        <Button colorScheme="blue" onClick={() => setCount(count + 1)}>
          click
        </Button>
      </Box>
    </>
  );
};

export default MainPage;
