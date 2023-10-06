import { FlatList } from "native-base";
import MoviesCard from "../listitems/MoviesCard";

const MoveList = (props) => {
  const { navigation, records, mediaType } = props;
  return (
    <FlatList
      data={records}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MoviesCard
          posterPath={item.poster_path}
          title={item.title || item.name}
          popularity={item.popularity}
          releaseDate={item.release_date || item.first_air_date}
          uri={item.uri}
          navigation={navigation}
          id={item.id}
          mediaType={mediaType || item.media_type}
        />
      )}
      height="60%"
    />
  );
};

export default MoveList;
