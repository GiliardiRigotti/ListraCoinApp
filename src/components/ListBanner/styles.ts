import { FlatList } from "react-native";
import styled from "styled-components/native";

export const ListItems = (styled.FlatList`
    width: 100%;
  ` as unknown) as typeof FlatList;