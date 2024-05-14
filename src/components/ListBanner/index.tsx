import React from "react";
import { ListItems } from "./styles";
import { ShopCard } from "../ShopCard";
import { IProduct } from "../../interfaces/shop";
import { BannerCard } from "../BannerCard";

interface Props {
    data: IProduct[]
}

export function ListBanner({ data }: Props) {
    return (
        <ListItems
            data={data}
            renderItem={({ item }) => (
                <BannerCard product={item} />
            )}
            contentContainerStyle={{
                paddingTop: 20,
                gap: 20
            }}
            numColumns={2}
            columnWrapperStyle={{
                rowGap: 20
            }}
        />
    )
}