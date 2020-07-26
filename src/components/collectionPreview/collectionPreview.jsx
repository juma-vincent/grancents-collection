import React from "react";
import "./collectionPreview.scss";
import CollectionItem from "./../collectionItem/collectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collectionPreview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
