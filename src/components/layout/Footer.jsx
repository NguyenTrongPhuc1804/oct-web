import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Input,
  Button,
  FormControl,
  FormHelperText,
  Wrap,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import SocialCard from "../widgets/SocialCard ";

const Footer = () => {
  const navigate = useNavigate();
  const bg = "#f2f2f2";
  const mapIframeUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31347.608044386172!2d106.771351!3d10.853261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527865cd5d033%3A0x47506e2b89a597eb!2zQ3R5IEdp4bqjaSBQaMOhcCBDw7RuZyBOZ2jhu4cgT0NU!5e0!3m2!1svi!2sus!4v1687731694751!5m2!1svi!2sus";

  return (
    <Container maxW="container.fluid" centerContent bg={bg}>
      {/* Desktop content */}
      <Flex
        w="100%"
        maxW="container.xl"
        my="1.5rem"
        display={["none", "none", "flex", "flex"]}
      >
        <SimpleGrid columns={3} spacing="5em">
          <Box margin="1em">
            <Text fontWeight="bold" fontSize="1.5rem" color="blue">
              Công ty Giải Pháp Công Nghệ Viễn Thông OCT
            </Text>
            <Text fontSize="lg">
              Chuyên lắp đặt hệ thống camera an ninh, camera giám sát chuyên
              nghiệp tại HCM. Là đối tác chính thức của các hãng camera hàng đầu
              như: HIKVISION, KBVISION, DAHUA, EZVIZ ...{" "}
            </Text>
            <Text>
              Địa chỉ: 37/2 Đường Số 7, Phường Linh Chiểu, TP. Thủ Đức
            </Text>
            <Text fontWeight="bold">Tư Vẫn Mua Hàng: </Text>
            <Text color="red" fontWeight={"bold"}>
              0962 938 772
            </Text>{" "}
            <Text fontWeight="bold">Hỗ Trợ Kỹ Thuật: </Text>
            <Text color="red" fontWeight={"bold"}>
              0819 291 294
            </Text>
          </Box>
          <Box>
            <iframe
              title="Location Map"
              src={mapIframeUrl}
              width="100%"
              height="400px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
          <Box margin="1em">
            <SocialCard
              name="Viễn Thông OCT"
              mail="vienthong.oct@gmail.com"
              avatar="./FB.jpg"
              followers={1525}
              bio="Chuyên: Tư vấn, lắp đặt Camera, Hệ thống Wifi-Internet CAMERA-LAPTOP-PC-MÁY IN-LINH PHỤ KIỆN VIỄN THÔ"
              website="https://lapcamera24h.com"
              socialMediaLink="https://www.facebook.com/vienthongoct"
            />
          </Box>
        </SimpleGrid>
      </Flex>

      {/* Mobile content */}
      <Flex
        display={["flex", "flex", "none", "none"]}
        my={4}
        alignItems="center"
        justifyContent="center"
      >
        <VStack w="100%" mb={3}>
          <VStack mb={4}>
            <Text fontWeight="bold" fontSize="1.5rem">
              SUBSCRIBE TO BE THE FIRST
            </Text>
            <Text fontSize="lg">
              New products, discounts and unique offers in our newsietter
            </Text>

            <FormControl zIndex={0}>
              <HStack>
                <Input
                  type="email"
                  variant="flushed"
                  placeholder="Enter your email"
                />
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <ArrowForwardIcon boxSize={6} />
                </Button>
              </HStack>
              <FormHelperText>We{`'`}ll never share your email.</FormHelperText>
            </FormControl>
          </VStack>
          <Flex flexDir="column">
            <Wrap>
              <VStack mx={9} align="start" my="4" px="5">
                <Box>
                  <Text fontWeight="bold">Customer Service</Text>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Shipping &amp; Returns</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </Box>
              </VStack>
              <VStack mx={9} align="start" my="4" px="5">
                <Box>
                  <Text fontWeight="bold">About Us</Text>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Our Story</a>
                    </li>
                    <li>
                      <a href="#">Meet the Team</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                  </ul>
                </Box>
              </VStack>
              <VStack mx={9} align="start" my="4" px="5">
                <Box>
                  <Text fontWeight="bold">Connect with Us</Text>
                  <ul className="list-unstyled">
                    <li>
                      <a>Facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                </Box>
              </VStack>
            </Wrap>
            <VStack>
              <p className="text-center">
                &copy; {new Date().getFullYear()} My E-Commerce Store
              </p>
            </VStack>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Footer;
