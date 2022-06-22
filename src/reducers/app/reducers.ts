import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Repo } from './../../models/interfaces/repo';
import { Issue } from './../../models/interfaces/issue';
import { setAccessToken, setUsername } from './actions';

export interface AppState {
    username: string;
    accessToken: string;
    issueList: Issue[];
    repoList: Repo[];
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
