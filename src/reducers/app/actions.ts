import { createAction } from '@reduxjs/toolkit';

export const setUsername = createAction<string>('APP/SET_USERNAME');

export const setAccessToken = createAction<string>('APP/SET_ACCESS_TOKEN');
