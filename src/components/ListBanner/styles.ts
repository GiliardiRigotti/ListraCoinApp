import { FlatList } from "react-native";
import styled from "styled-components/native";

export const ListItems = (styled.FlatList.attrs({
    columnWrapperStyle: {
        flex: 1,
        justifyContent: "space-around"
    }
})`
    width: 100%;
  ` as unknown) as typeof FlatList;