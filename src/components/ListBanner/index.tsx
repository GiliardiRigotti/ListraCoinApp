import React from "react";
import { ListItems } from "./styles";
import { BannerCard } from "../BannerCard";


export function ListBanner() {
    return (
        <ListItems
            data={[1, 2, 3, 4]}
            renderItem={() => (
                <BannerCard />
            )}
            showsHorizontalScrollIndicator
            contentContainerStyle={{
                paddingTop: 20,
                gap: 5
            }}
            horizontal
        />
    )
}