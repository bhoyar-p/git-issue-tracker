import { RootState } from "..";

export const selectUsername = (state: RootState) => state.app.username;
export const selectAccessToken = (state: RootState) => state.app.accessToken;