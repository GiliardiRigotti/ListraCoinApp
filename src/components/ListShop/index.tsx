import React from "react";
import { ListItems } from "./styles";
import { ShopCard } from "../ShopCard";
import { IProduct } from "../../interfaces/shop";

interface Props {
    data: IProduct[]
}

export function ListShop({ data }: Props) {
    return (
        <ListItems
            data={data}
            renderItem={({ item }) => (
                <ShopCard product={item} />
            )}
            contentContainerStyle={{
                gap: 20
            }}
            numColumns={2}
        />
    )
}