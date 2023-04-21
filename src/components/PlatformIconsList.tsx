import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platforms} from "../hooks/useGames";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platforms[];
}

const PlatformIconsList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    };
    return (
        <HStack marginY={"5px"}>
            {/* {game.parent_platforms.map((platform) => (
            <Text>{platform.platform.name}</Text>
        ))} */}
            {platforms.map((platform) => (
                <Icon
                    as={iconMap[platform.slug]}
                    color={"gray.500"}
                    key={platform.id}
                />
            ))}
        </HStack>
    );
};

export default PlatformIconsList;
