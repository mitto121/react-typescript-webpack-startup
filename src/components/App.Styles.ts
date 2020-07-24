import styled from '@emotion/styled'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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

export const StyleMainContainer = styled(Grid)`
    padding-top:0.7rem;
    ${layoutFill};
`;
export const StylePictureCard = styled(Paper)`
    width: 15rem;
    height: 15rem;
    margin:1rem;
    color:#fff;
    padding: 5px;
    background-color:#343030;
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
    background-color:#343030;
    cursor:pointer;
    &:hover{
     background-color:#0d0d0d;
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
    color:#ff3;
 `;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            height:"100%"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    })
);

export const StyleBackDrop=styled('div')`
    position: fixed;    
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 100;
`