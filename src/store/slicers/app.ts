import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../shared/constants/key';
import { api } from '../middleware/api';
import { EBaseUrl } from '../models/enums/baseUrl.enum';
import { ICountryCityResponse, ICurrentDayResponse, IForecastDataResponse, IHistoricalDayResponse } from '../models/interfaces/app.interface';

export type IAppInitialState = {
    currentDayData: ICurrentDayResponse | null;
    nextFiveDaysForecast: null | IForecastDataResponse;
    searchValue: ICountryCityResponse | null;
    historicalDayData: IHistoricalDayResponse[] | null;
};

const initialState: IAppInitialState = {
    currentDayData: null,
    nextFiveDaysForecast: null,
    searchValue: null,
    historicalDayData: null,
};

const name = 'APP';

export const searchCountryCity = createAsyncThunk<ICountryCityResponse[], string>(
    `${name}/SearchCountryCity`,
    async (value: string) => {
        return (await api.get(`${EBaseUrl.API}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`))
            .data as ICountryCityResponse[];
    },
    { serializeError: (error: any) => error },
);

export const getCurrentConditions = createAsyncThunk<IForecastDataResponse, string>(
    `${name}/getCurrentConditions`,
    async (locationKey: string) => {
        return (await api.get(`${EBaseUrl.API}/forecasts/v1/daily/1day/${locationKey}?apikey=${API_KEY}&details=true`))
            .data as IForecastDataResponse;
    },
    { serializeError: (error: any) => error },
);

export const getTodayForecast = createAsyncThunk<ICurrentDayResponse[], string>(
    `${name}/getTodayForecast`,
    async (locationKey: string) => {
        return (await api.get(`${EBaseUrl.API}/forecasts/v1/hourly/1hour/${locationKey}?apikey=${API_KEY}&details=true`))
            .data as ICurrentDayResponse[];
    },
    { serializeError: (error: any) => error },
);


export const getNextDaysForecast = createAsyncThunk<IForecastDataResponse, string>(
    `${name}/getNextDaysForecast`,
    async (locationKey: string) => {
        return (await api.get(`${EBaseUrl.API}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=true`))
            .data as IForecastDataResponse;
    },
    { serializeError: (error: any) => error },
);

export const getHistoricalData = createAsyncThunk<IHistoricalDayResponse[], string>(
    `${name}/getHistoricalData`,
    async (locationKey: string) => {
        return (await api.get(`${EBaseUrl.API}/currentconditions/v1/${locationKey}/historical/24/?apikey=${API_KEY}&details=true`))
            .data as IHistoricalDayResponse[];
    },
    { serializeError: (error: any) => error },
);

const appSlice = createSlice({
    name,
    initialState,
    reducers: {
        setSearchValue(state, { payload }: { payload: ICountryCityResponse | null }) {
            state.searchValue = payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(getTodayForecast.fulfilled, (state, { payload }: { payload: ICurrentDayResponse[] }) => {
            state.currentDayData = payload[0];
        });
        builder.addCase(getNextDaysForecast.fulfilled, (state, { payload }: { payload: IForecastDataResponse }) => {
            state.nextFiveDaysForecast = payload;
        });
        builder.addCase(getHistoricalData.fulfilled, (state, { payload }: { payload: IHistoricalDayResponse[] }) => {
            state.historicalDayData = payload;
        });
    },
});

export const {
    setSearchValue,
} = appSlice.actions;

export const selectCurrentConditionsData = (state: any) => state.app.currentDayData;

export const selectNextDaysForecastData = (state: any) => state.app.nextFiveDaysForecast;

export const selectHistoricalDayData = (state: any) => state.app.historicalDayData;

export const selectSearchValue = (state: any) => state.app.searchValue;


export default appSlice.reducer;
