// Home Screen

import React, { useState } from "react";
import { VStack } from "native-base";
import LoadingSpinner from "../loading";
import SelectedItem from "../forms/SelectedItem";
import MovieContainer from "../containers/MovieContainer";
import { useGetListType } from "../../hook/useGetMovieType";
import { options } from "../../constants";

const HomeScreen = ({ navigation }) => {
  const [listType, setListType] = useState("popular");
  const { isLoading, records } = useGetListType("movie", listType);

  const handleSelectChange = (listType) => {
    setListType(listType);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack space={3} alignSelf="center">
      <SelectedItem
        options={options}
        onSelectChange={handleSelectChange}
        selectedOption={listType}
      />
      <MovieContainer
        records={records}
        navigation={navigation}
        mediaType="movie"
      />
    </VStack>
  );
};

export default HomeScreen;
