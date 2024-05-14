import React from "react";
import { ListItems } from "./styles";

interface Props {
    data: Object[]
    children: React.ReactNode
}

export function ListShop({ data, children }: Props) {
    return (
        <ListItems
            data={data}
            renderItem={({ item }) => {

                return children
            }}
        />
    )
}