import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platforms} from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null;
    platform: Platforms | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`, //mobile device, we don't want aside,so we should in GridItem wrap Aside in show tag.
                lg: `"nav nav" "aside main"`, //wider 1024px
            }}
            templateColumns={{
                base: `"1fr"`,
                lg: `"200px" "1fr"`,
            }}
        >
            <GridItem area="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({...gameQuery, searchText})
                    }
                />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={12}>
                    <GenreList
                        onSelectGenre={(genre) =>
                            setGameQuery({...gameQuery, genre})
                        }
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={10}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginBottom={1}>
                        <Box marginRight={5}>
                            <PlatformSelector
                                onSelectPlatform={(platform) =>
                                    setGameQuery({...gameQuery, platform})
                                }
                                selectedPlatform={gameQuery.platform}
                            />
                        </Box>
                        <SortSelector
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({...gameQuery, sortOrder})
                            }
                            sortOrder={gameQuery.sortOrder}
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
