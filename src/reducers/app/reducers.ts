import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setAccessToken, setUsername } from './actions';

// TODO: finalize the types
export interface AppState {
    username: string;
    accessToken: string;
    issueList: any[];
    repoList: any[];
}

const initialState: AppState = {
    username: '',
    accessToken: '',
    issueList: [],
    repoList: [],
};

const appReducer = createReducer(initialState, (app) => {
    app.addCase(
        setUsername,
        (state: AppState, { payload }: PayloadAction<string>) => ({
            ...state,
            username: payload,
        }),
    );
    app.addCase(
        setAccessToken,
        (state: AppState, { payload }: PayloadAction<string>) => ({
            ...state,
            accessToken: payload,
        }),
    );
});

export default appReducer;
