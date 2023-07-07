import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../Redux/Ducks/UserDux";
import { IoCart } from "react-icons/io5";
// import CartDrawer, { saveCart } from "./CartDrawer";

const Header = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenCart, onOpenCart] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("primary.200", "primaryDark.200");
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const dispatch = useDispatch();
  const toast = useToast();
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  const countProduct = cart.count;
  const categories = useSelector((state) => state.ui.category);
  const pages = useSelector((state) => state.ui.pages);

  // const product = useSelector((state) => state.cart.products);
  // console.log(product);

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.outerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* {CartDrawer({
        isOpen: isOpenCart,
        onClose: () => {
          onOpenCart(false);
        },
        token,
      })} */}
      <Container
        maxW="container.fluid"
        h="4rem"
        background={bg}
        position="fixed"
        justifyContent="center"
        alignItems="center"
        zIndex="6"
        backdropFilter="blur(9px)"
      >
        {isDesktop ? (
          DesktopLayout({
            navigate,
            colorMode,
            toggleColorMode,
            handleLogout,
            token,
            onOpenCart,
            countProduct,
            cart,
            categories,
            pages,
          })
        ) : (
          <Flex h="100%" align={"center"}>
            <a href="/">
              <Flex align={"center"}>
                <Image src="/vite.svg" h={"3rem"} alt="kogla logo" />
                <Text
                  color={"white"}
                  fontFamily="handWritten"
                  fontSize="2rem"
                  fontWeight="normal"
                >
                  Kogla
                </Text>
              </Flex>
            </a>
            <Spacer />
            <Button onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            {MobileLayout({
              navigate,
              onClose,
              isOpen,
              bg,
              toggleColorMode,
              colorMode,
              toast,
              cart,
            })}
          </Flex>
        )}
      </Container>
    </>
  );
};

export default Header;

const MobileLayout = ({ navigate, onClose, isOpen, bg, cart }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px">
        <Heading
          onClick={() => {
            saveCart(cart);
            navigate("/");
          }}
        >
          Kogla
        </Heading>
        <DrawerCloseButton />
      </DrawerHeader>
      <DrawerBody>
        <Box
          shadow="md"
          p="1rem"
          borderRadius="xl"
          mb="1rem"
          bg={
            window.location.pathname == "/collections/all-products"
              ? bg
              : undefined
          }
          onClick={() => {
            navigate("/collections/all-products");
            onClose();
          }}
        >
          <Text>All Products</Text>
        </Box>
        <Box
          shadow="md"
          p="1rem"
          borderRadius="xl"
          mb="1rem"
          bg={
            window.location.pathname == "/collections/mousepad" ? bg : undefined
          }
          onClick={() => {
            navigate("/collections/mousepad");
            onClose();
          }}
        >
          <Text>Mousepad</Text>
        </Box>
        <Box
          shadow="md"
          p="1rem"
          borderRadius="xl"
          mb="1rem"
          bg={
            window.location.pathname == "/collections/chairpad" ? bg : undefined
          }
          onClick={() => {
            navigate("/collections/chairpad");
            onClose();
          }}
        >
          <Text>Chairpad</Text>
        </Box>
        <Box
          shadow="md"
          p="1rem"
          borderRadius="xl"
          mb="1rem"
          bg={
            window.location.pathname == "/collections/chopping-board"
              ? bg
              : undefined
          }
          onClick={() => {
            navigate("/collections/choppingboard");
            onClose();
          }}
        >
          <Text>Chopping board</Text>
        </Box>
        <Box
          shadow="md"
          p="1rem"
          borderRadius="xl"
          mb="1rem"
          bg={
            window.location.pathname == "/collections/search" ? bg : undefined
          }
          onClick={() => {
            navigate("/about");
          }}
        >
          <Text>Tìm kiếm</Text>
        </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const DesktopLayout = ({
  navigate,
  // handleLogout,
  token,
  onOpenCart,
  countProduct,
  cart,
  categories,
  pages,
}) => (
  <Flex
    id="subcont"
    h="100%"
    alignItems="center"
    color={"white"}
    justify={"space-between"}
  >
    <a
      href="/"
      onClick={() => {
        saveCart(cart);
      }}
    >
      <Flex align={"center"}>
        <Image src="/vite.svg" h={"3rem"} alt="kogla logo" />
        <Text fontFamily="handWritten" fontSize="2rem" fontWeight="normal">
          OCT
        </Text>
      </Flex>
    </a>
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          // rounded={"full"}
          variant={"unstyled"}
          cursor={"pointer"}
          minW={0}
          px={4}
          _hover={{ bg: "secondary.200" }}
        >
          <Text
            fontFamily={"body"}
            fontSize={"md"}
            color={"white"}
            fontWeight={"normal"}
          >
            Sản phẩm
          </Text>
        </MenuButton>
        <MenuList alignItems={"center"} bg={"primary.200"}>
          <Flex p={5}>
            <MenuItem
              bgColor={"primary.200"}
              fontFamily={"heading"}
              fontSize={"xl"}
              _hover={{ bg: "secondary.200" }}
              onClick={() => navigate("/collections/all-products")}
              w={"auto"}
            >
              <Box>
                <Image
                  src="/camera1.jpg"
                  h={"10rem"}
                  w={"10rem"}
                  objectFit={"cover"}
                />
                <Text>Tất cả sản phẩm</Text>
              </Box>
            </MenuItem>
            {categories.map((cat, id) => {
              return (
                <MenuItem
                  key={id}
                  bgColor={"primary.200"}
                  fontFamily={"heading"}
                  fontSize={"xl"}
                  _hover={{ bg: "secondary.200" }}
                  w={"auto"}
                  onClick={() => navigate(`/collections/${cat.routeName}`)}
                >
                  <Box>
                    {cat.avatar.length !== 0 && (
                      <Image
                        alt={cat.avatar[0]?.name}
                        src={cat.avatar[0].url}
                        h={"10rem"}
                        w={"10rem"}
                        objectFit={"cover"}
                      />
                    )}
                    <Text>{cat.name}</Text>
                  </Box>
                </MenuItem>
              );
            })}
          </Flex>
        </MenuList>
      </Menu>
      {pages.map((cat, id) => {
        return (
          <a href={`/info/${cat.routeName}`} key={id}>
            <Button
              bgColor={"primary.200"}
              fontFamily={"body"}
              fontSize={"md"}
              color={"white"}
              fontWeight={"normal"}
              _hover={{ bg: "secondary.200" }}
              w={"auto"}
            >
              <Box>
                <Text>{cat.name}</Text>
              </Box>
            </Button>
          </a>
        );
      })}

      <a href="/news/0/20">
        <Button
          variant={"unstyled"}
          fontFamily={"body"}
          fontSize={"md"}
          color={"white"}
          fontWeight={"normal"}
          mx={4}
          px={4}
          _hover={{ bg: "secondary.200" }}
        >
          Bài viết
        </Button>
      </a>
    </Flex>

    <ButtonGroup variant="ghost">
      <Button
        onClick={() => {
          onOpenCart(true);
        }}
      >
        <IoCart size={"2rem"} />
        {`(${countProduct})`}
      </Button>
      {/* <Button
        onClick={() => {
          navigate("/collections/search");
        }}
      >
        <Search2Icon boxSize={5} />
      </Button> */}
      {token && (
        <IconButton
          me={5}
          aria-label="Toggle color mode"
          bgColor="transparent"
          // onClick={handleLogout}
          icon={<BsBoxArrowInRight size={"1.75rem"} />}
        />
      )}
    </ButtonGroup>
  </Flex>
);
