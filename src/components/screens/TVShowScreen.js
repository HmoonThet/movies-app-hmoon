import { useState } from "react";

import { VStack, Text } from "native-base";
import SelectedItem from "../forms/SelectedItem";
import MovieContainer from "../containers/MovieContainer";
import LoadingSpinner from "../loading";
import { tv_options } from "../../constants";
import { useGetListType } from "../../hook/useGetMovieType";

const TVShowScreen = ({ navigation }) => {
  const [listType, setListType] = useState("airing_today");

  const { isloading, records } = useGetListType("tv", listType);

  if (isloading) {
    return <LoadingSpinner />;
  }

  const handleSelectChange = (listType) => {
    setListType(listType);
  };

  return (
    <VStack space={3} alignSelf="center">
      <SelectedItem
        options={tv_options}
        onSelectChange={handleSelectChange}
        selectedOption={listType}
      />
      <MovieContainer
        records={records}
        navigation={navigation}
        mediaType="tv"
      />
    </VStack>
  );
};

export default TVShowScreen;
