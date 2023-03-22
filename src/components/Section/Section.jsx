import React from "react";
import {SectionStyled} from './Section.styled'

export const Section = ({title, toRender}) => {
    return (
      <SectionStyled>
            <h2>{title}</h2>
            {toRender}
      </SectionStyled>
    );
}