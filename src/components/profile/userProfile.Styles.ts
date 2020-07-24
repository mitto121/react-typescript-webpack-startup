import styled from '@emotion/styled'
import { Paper, Grid } from '@material-ui/core';
import { css } from '@emotion/core'
export const layoutFill=css`
    height:100%;
    width:100%;
 `;

export const StyleContainer = styled(Grid)`
  padding: 32px;
  background-color: #ebe9ea;
  display:flex;
  overflow:auto;
  ${layoutFill};
`;
export const StyleProfileSummary = styled(Grid)`
    padding: 32px;
    background-color: #ced0d0;
    display:flex;
    ${layoutFill};
`;

export const StylePictureCard = styled(Paper)`
    width: 15rem;
    height: 15rem;
    margin:1rem;
    color:#fff;
    padding: 5px;
    cursor:pointer;
    &:hover{
     background-color:#0d0d0d;
    }
`;
 
export const StyleCard = styled(Paper)`
    width: 12rem;
    height: 12rem;
    margin:1rem;
    color:#fff;
    padding: 5px;
    cursor:pointer;
    &:hover{
     background-color:#e1e3f1;
    }
`;
export const StyleImg=styled("img")`
    border-radius: 25px;  
    ${layoutFill}; 
`
export const StyleProjectDetail = styled(Grid)`
    display: block;
    max-width: 100%;
    height: 10rem;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:0.65rem;
    color:#79797c
 `;



