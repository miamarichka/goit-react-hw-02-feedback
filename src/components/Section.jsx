import React from "react";

export const Section = ({title, toRender}) => {
    return (
      <>
            <h2>{title}</h2>
            {toRender}
      </>
    );
}