import { useEffect, useState } from "react";
import { Button, Container, ScrollView } from "native-base";
import MovieList from "../lists/MovieList";

const MovieContainer = ({ navigation, records, mediaType }) => {
  const [passingData, setPassingData] = useState([]);
  let currentPage = 1;

  useEffect(() => {
    if (records) {
      const initialData = records.slice(0, 10);
      setPassingData(initialData);
    }
  }, [records]);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    const start = (nextPage - 1) * 10;
    const end = nextPage * 10;
    const nextPageData = records.slice(start, end);
    setPassingData(nextPageData);
    currentPage = nextPage;
  };

  return (
    <Container maxWidth="100%" style={{ flex: 1 }}>
      <MovieList
        navigation={navigation}
        records={passingData.length > 0 ? passingData : records}
        mediaType={mediaType}
      />

      <Button marginX="auto" marginY="4" paddingX="12" onPress={handleNextPage}>
        Next
      </Button>
    </Container>
  );
};

export default MovieContainer;
