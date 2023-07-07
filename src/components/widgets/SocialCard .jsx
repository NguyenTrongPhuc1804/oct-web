import { Box, Image, Text, Button, Link } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'
import { FaFacebook, FaGlobe } from "react-icons/fa"

const SocialCard = ({ name, mail, avatar, followers, bio, website, socialMediaLink }) => {
    return (
        <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={4}
            bgColor="whiteAlpha.700"
        >
            <Box display="flex" alignItems="center" mb={4} >

                <Image src={avatar} alt={name} boxSize="50px" borderRadius="full" mr={4} />
                <Box>
                    <Text fontSize="lg" fontWeight="bold">
                        {name}
                    </Text>
                    <Text color="gray.500"><EmailIcon mr="1" />{mail}</Text>
                    <Text fontWeight="bold">{followers}</Text>
                    <Text>Followers</Text>
                </Box>
            </Box>

            <Text mb={4}>{bio}</Text>
            {website && (
                <Button
                    as={Link}
                    href={website}
                    target="_blank"
                    colorScheme="blue"
                    mb={4}
                    w="100%"
                    leftIcon={<FaGlobe />}
                >
                    Visit Website
                </Button>
            )}

            <Button
                as={Link}
                href={socialMediaLink}
                target="_blank"
                colorScheme="blue"
                w="100%"
                leftIcon={<FaFacebook />}
            >
                View Profile
            </Button>
        </Box>
    );
};

export default SocialCard;
