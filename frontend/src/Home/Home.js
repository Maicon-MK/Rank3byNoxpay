import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Button,
  SimpleGrid,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Home() {
  const [ranking, setRanking] = useState([]);
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

//It makes a GET request to http://localhost:5000/cryptocurrencies. 
//If the request is successful, the response data is stored in the "Cryptocurrencies" 
//state using the "setCryptocurrencies" function.
  useEffect(() => {
    axios
      .get("http://localhost:5000/cryptocurrencies")
      .then((response) => {
        setCryptocurrencies(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  }, []);


  //Makes a POST request to "http://localhost:5000/criptocurrencies/vote/{id}" 
//to register a vote for a cryptocurrency with the provided ID.
//It then makes a GET request to "http://localhost:5000/rankings" to get the updated ranking data.

  const handleVote = (id) => {
    axios
      .post(`http://localhost:5000/criptocurrencies/vote/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        return axios.get("http://localhost:5000/rankings");
      })
      .then((response) => {
        setRanking(response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });
  };

  return (

    <Container>

      {ranking.length > 0 ? (
        <>
          <Heading
            marginY={8}
            textAlign={'center'}
            textColor={'#59A68C'}>Ranking</Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(1, minmax(200px, 1fr))"
          >
            {ranking.map((crypto, idx) => (
              <Box
                padding={4}
                key={crypto.id}
                display="flex"
                borderWidth="1px"
                borderRadius="lg"
                alignItems={"center"}
                justifyContent={"space-between"}
                textColor={'#399'}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}>
                  <Text
                    fontSize={"xs"}
                    colorScheme={"gray"}
                    paddingRight={4}>
                    {idx + 1}ª
                  </Text>
                  <Heading size="md">{crypto.name}</Heading>
                </Box>
                <Heading size="sm">
                  {crypto.vote}
                  <Text
                    fontSize={"sm"}
                    paddingLeft={2}
                    display={"inline"}
                    colorScheme={"gray"}
                  >
                    vote{crypto.vote > 1 && "s"}
                  </Text>
                </Heading>
              </Box>
            ))}
          </SimpleGrid>

        </>
      ) : (
        <>

          <Heading marginY={8} textAlign={'center'} textColor={'#59A68C'}>Cryptocurrencies</Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(1, minmax(200px, 1fr))"
          >
            {cryptocurrencies.map((crypto) => (
              <Box
                padding={4}
                key={crypto.id}
                display="flex"
                borderWidth="1px"
                borderRadius="lg"
                alignItems={"center"}
                justifyContent={"space-between"}
                background={'#CBBE8D'}
              >
                <Heading size="md" color={'#fff'}>{crypto.name}</Heading>
                <Button
                  leftIcon={<StarIcon />}
                  colorScheme={"teal"}
                  onClick={() => handleVote(crypto.id)}
                >
                  VOTE
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}
