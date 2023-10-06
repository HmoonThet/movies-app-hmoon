// Movie Details Screen
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Heading, VStack, Text, Image, Center, Box } from "native-base";
import LoadingSpinner from "../loading";
import { useGetRecord } from "../../hook/useGetMovie"; //from "../../hook/useGetRecord";

const MovieDetail = ({ route }) => {
  const { id, mediaType } = route.params;
  const { record, isLoading } = useGetRecord(mediaType, id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!record) {
    return null;
  }

  const posterUrl = record?.poster_path
    ? `https://image.tmdb.org/t/p/w500${record.poster_path}`
    : null;

  return (
    <ScrollView style={styles.container}>
      <VStack>
        <Center height={160} width="100%">
          <Heading size="lg">{record.title || record.name}</Heading>
        </Center>
        <Center>
          {posterUrl && (
            <Image
              alt={record.title || record.name}
              source={{ uri: posterUrl }}
              size="2xl"
            />
          )}
        </Center>
        <Box margin={8}>
          <Text>{record.overview}</Text>
          <Text paddingY={1}>
            Popularity: {record.popularity} | Release Date:{" "}
            {record.release_date || "-"}
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MovieDetail;
