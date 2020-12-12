import React from 'react'
import CollectionItem from "./../collection-item/collection-item.component"

import "./../../css/collection-preview.styles.css"

const CollectionPreview = ({title, items, id}) => {
  return (
    <div className="collection-preview">
      <h1 className="">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4)
            .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview