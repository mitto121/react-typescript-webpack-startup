import * as React from 'react';
import {ToolBar} from './toolBar';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import { UserProfile } from './profile/userProfile';

export const StyleMainContainer = styled(Grid)`
    padding-top:0.7rem;
    height:100%;
    width:100%;
`;
export const StylePage = styled(Grid)`
    height:100%;
    width:100%;
`;

export default function App() {
   return (
    <StylePage container direction="column">
        <ToolBar/>
        <StyleMainContainer container direction="row" justify="flex-start" alignItems="flex-start">
          <UserProfile/>
       </StyleMainContainer>
    </StylePage>
  );
}