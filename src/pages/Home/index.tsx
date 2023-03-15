import { Fragment, useCallback, useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  getHistoricalData,
  getNextDaysForecast,
  getTodayForecast,
  searchCountryCity,
  selectCurrentConditionsData,
  selectHistoricalDayData,
  selectNextDaysForecastData,
  selectSearchValue,
  setSearchValue,
} from "../../store/slicers/app";
import { AppDispatch } from "../../store";
import {
  ICountryCityResponse,
  ICurrentDayResponse,
  IForecastDataResponse,
} from "../../store/models/interfaces/app.interface";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { fahrenheitToCelsius } from "../../shared/helpers/converter";
import CardUI from "../../shared/ui/Card";
import { weatherIconsData } from "../../shared/constants/weatherIconsData";
import { IWeatherIcon } from "../../store/models/interfaces/icon.interface";
import { format } from "date-fns";
import ChartHistoricalUI from "../../shared/ui/Chart";
import { EUnitType } from "../../store/models/enums/unitType.enum";

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<ICountryCityResponse[]>([]);
  const [type, setType] = useState<typeof EUnitType[keyof typeof EUnitType]>(
    EUnitType.CELSIUS
  );

  const autocompleteValue = useSelector(selectSearchValue);

  const dispatch = useDispatch<AppDispatch>();

  const currentConditionsData = useSelector(selectCurrentConditionsData);

  const nextFiveDaysForecast = useSelector(selectNextDaysForecastData);

  const historicalDayData = useSelector(selectHistoricalDayData);

  const styles = useStyles();

  const fetchCities = useCallback(
    async (cityName: string) => {
      const { meta, payload } = await dispatch(searchCountryCity(cityName));

      if (meta.requestStatus !== "fulfilled") {
        return;
      }
      const typedPayload = payload as ICountryCityResponse[];
      setOptions(typedPayload);
    },
    [dispatch]
  );

  const fetchNextFiveDaysForecast = useCallback(
    async (locationKey: string) => {
      const { meta } = await dispatch(getNextDaysForecast(locationKey));
      if (meta.requestStatus !== "fulfilled") {
        return;
      }
    },
    [dispatch]
  );

  const fetchTodayData = useCallback(
    async (locationKey: string) => {
      const { meta } = await dispatch(getTodayForecast(locationKey));
      if (meta.requestStatus !== "fulfilled") {
        return;
      }
    },
    [dispatch]
  );

  const fetchHistoricalData = useCallback(
    async (locationKey: string) => {
      const { meta } = await dispatch(getHistoricalData(locationKey));
      if (meta.requestStatus !== "fulfilled") {
        return;
      }
    },
    [dispatch]
  );

  const handleInputChange = (inputVal: string) => {
    setInputValue(inputVal);
    fetchCities(inputVal);
  };

  const handleChangeAutocompleteValue = (
    newValue: ICountryCityResponse | null
  ) => {
    dispatch(setSearchValue(newValue));
    if (newValue) {
      fetchNextFiveDaysForecast(newValue.Key);
      fetchTodayData(newValue.Key);
      fetchHistoricalData(newValue.Key);
    }
  };

  const currentDay = useMemo((): ICurrentDayResponse | undefined => {
    if (currentConditionsData) {
      return currentConditionsData;
    }
  }, [currentConditionsData]);

  const nextFiveDaysData = useMemo((): IForecastDataResponse | undefined => {
    if (nextFiveDaysForecast) {
      return nextFiveDaysForecast;
    }
  }, [nextFiveDaysForecast]);

  const celsius = useCallback((val: number): string | undefined => {
    if (val) {
      const value = fahrenheitToCelsius(val);
      return `${Math.round(value)}`;
    }
  }, []);

  const realTemperatureFeelsLike = useMemo((): string | undefined => {
    if (currentDay?.RealFeelTemperature.Value) {
      const value =
        type === EUnitType.CELSIUS
          ? `${Math.round(
              fahrenheitToCelsius(currentDay.RealFeelTemperature.Value)
            )}\xB0`
          : `${currentDay.RealFeelTemperature.Value}\xB0F`;
      return value;
    }
  }, [currentDay?.RealFeelTemperature?.Value, type]);

  const findWeatherIcon = useCallback((val: string) => {
    if (val) {
      const icon = weatherIconsData.find(
        (item: IWeatherIcon) => item.value?.toLowerCase() === val?.toLowerCase()
      );
      return icon?.img ?? weatherIconsData[0].img;
    }
  }, []);

  return (
    <Fragment>
      <Box className={styles.container}>
        <Box className={styles.row}>
          <Box className={styles.leftPane}>aa</Box>
          <Box className={styles.center}>
            <Autocomplete
              className={styles.mainColor}
              value={autocompleteValue ?? null}
              onChange={(_, newValue: ICountryCityResponse | null) => {
                handleChangeAutocompleteValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(_, newInputValue) => {
                handleInputChange(newInputValue);
              }}
              getOptionLabel={(option: ICountryCityResponse) =>
                option?.LocalizedName ?? ""
              }
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option.Key}>
                    {option.LocalizedName}
                  </li>
                );
              }}
              id="cities-autocomplete"
              options={options ?? []}
              renderInput={(params) => (
                <TextField {...params} label="Search for cities" />
              )}
            />

            {currentDay && (
              <>
                <Box pl={2}>
                  {autocompleteValue && (
                    <Typography variant="h3" mt={1.5}>
                      {autocompleteValue.LocalizedName}
                    </Typography>
                  )}
                  <Typography mt={3} color="darkgray">
                    Chance of Rain: {currentDay.Rain.Value} %
                  </Typography>
                  <Box display="flex" mt={5} justifyContent="space-between">
                    <Typography variant="h4" mt={3}>
                      Temperature:{" "}
                      {type === EUnitType.CELSIUS
                        ? `${celsius(currentDay?.Temperature?.Value)}\xB0`
                        : `${currentDay?.Temperature?.Value}\xB0F`}
                    </Typography>
                    <img
                      src={findWeatherIcon(currentDay?.IconPhrase)}
                      className={styles.img}
                      alt="icon"
                    />
                  </Box>

                  <Box
                    display="flex"
                    mt={5}
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    <CardUI
                      title="Humidity"
                      value={currentDay.IndoorRelativeHumidity}
                      width="48%"
                    />
                    <CardUI
                      title="Wind"
                      value={`${currentDay.Wind.Speed.Value} ${currentDay.Wind.Speed.Unit}`}
                      width="48%"
                    />
                    <CardUI
                      title="Chance of Rain"
                      value={`${currentDay.Rain.Value} %`}
                      width="48%"
                    />
                    <CardUI
                      title="Feels Like"
                      value={`${realTemperatureFeelsLike}`}
                      width="48%"
                    />
                  </Box>
                </Box>
              </>
            )}
          </Box>
          <Box className={styles.rightPane}>
            {nextFiveDaysData && historicalDayData && (
              <>
                <Card style={{ backgroundColor: "rgb(234, 236, 239)" }}>
                  <CardContent color="#d4cbcb30">
                    {nextFiveDaysData.DailyForecasts.length > 0 ? (
                      <>
                        <Typography
                          variant="h5"
                          color="rgb(147, 153, 162)"
                          mb={3}
                        >
                          5 Day Forecast
                        </Typography>
                        {nextFiveDaysData.DailyForecasts.map(
                          (item: any, index: number) => (
                            <Box
                              key={index}
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              mb={3}
                            >
                              <Typography>
                                {format(new Date(item.Date), "dd/MM/yyyy")}
                              </Typography>
                              <img
                                src={findWeatherIcon(item.Day.IconPhrase)}
                                alt={`day${index}`}
                                className={styles.rightPaneItemImg}
                              />
                              <Typography>
                                <span className={styles.bold}>
                                  {type === EUnitType.CELSIUS
                                    ? celsius(item.Temperature.Maximum.Value)
                                    : item.Temperature.Maximum.Value}
                                </span>
                                /
                                {type === EUnitType.CELSIUS
                                  ? celsius(item.Temperature.Minimum.Value)
                                  : item.Temperature.Minimum.Value}
                              </Typography>
                            </Box>
                          )
                        )}
                      </>
                    ) : null}
                  </CardContent>
                </Card>
                <Card
                  style={{
                    backgroundColor: "rgb(234, 236, 239)",
                    marginTop: 15,
                  }}
                >
                  <CardContent color="#d4cbcb30">
                    <ChartHistoricalUI data={historicalDayData} type={type} />
                  </CardContent>
                </Card>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
