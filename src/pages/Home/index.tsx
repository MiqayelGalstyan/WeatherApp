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
} from "../../store/slicers/app";
import { AppDispatch } from "../../store";
import {
  ICountryCityResponse,
  ICurrentDayResponse,
  IForecastDataResponse,
} from "../../store/models/interfaces/app.interface";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { useStyles } from "./styles";
import ChartHistoricalUI from "../../shared/ui/Chart";
import { EUnitType } from "../../store/models/enums/unitType.enum";
import Umbrella from "../../assets/umbrella.png";
import CardsList from "../../shared/components/CardsList/CardsList";
import Tabs from "../../shared/components/Tabs/Tabs";
import useWeatherIcon from "../../shared/hooks/useWeatherIcon";
import useFahrenheitToCelsius from "../../shared/hooks/useFahrenheitToCelsius";
import DailyForecast from "../../shared/components/DailyForecast";

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<ICountryCityResponse[]>([]);
  const [autocompleteValue, setAutocompleteValue] =
    useState<ICountryCityResponse | null>(null);
  const [type, setType] = useState<typeof EUnitType[keyof typeof EUnitType]>(
    EUnitType.CELSIUS
  );

  const dispatch = useDispatch<AppDispatch>();

  const findWeatherIcon = useWeatherIcon();

  const celsius = useFahrenheitToCelsius();

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
    if (inputVal) {
      fetchCities(inputVal);
    }
  };

  const handleChangeAutocompleteValue = (
    newValue: ICountryCityResponse | null
  ) => {
    setAutocompleteValue(newValue);
    if (newValue) {
      fetchNextFiveDaysForecast(newValue.Key);
      fetchTodayData(newValue.Key);
      fetchHistoricalData(newValue.Key);
    }
  };

  const handleChangeType = (
    unitType: typeof EUnitType[keyof typeof EUnitType]
  ) => {
    setType(unitType);
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

  return (
    <Fragment>
      <Box className={styles.container}>
        <Box className={styles.row}>
          <Box className={styles.leftPane}>
            <Box className={styles.iconArea}>
              <img src={Umbrella} alt="Logo" />
              <Divider />
            </Box>
            {autocompleteValue && currentDay && (
              <Tabs type={type} handleChange={handleChangeType} />
            )}
          </Box>
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

            {autocompleteValue && currentDay && (
              <>
                <Box pl={2} className={styles.titleArea}>
                  <Typography variant="h3" mt={4.3}>
                    {autocompleteValue.LocalizedName}
                  </Typography>

                  <Typography mt={3} color="darkgray">
                    Chance of Rain: {currentDay.RainProbability}%
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

                  <CardsList data={currentDay} type={type} />
                </Box>
              </>
            )}
          </Box>
          <Box className={styles.rightPane}>
            {autocompleteValue && nextFiveDaysData && historicalDayData && (
              <>
                <Card style={{ backgroundColor: "rgb(234, 236, 239)" }}>
                  <CardContent color="#d4cbcb30">
                    <>
                      <Typography
                        variant="h5"
                        color="rgb(147, 153, 162)"
                        mb={3}
                      >
                        5 Day Forecast
                      </Typography>
                      <DailyForecast data={nextFiveDaysData} type={type} />
                    </>
                  </CardContent>
                </Card>
                <Card
                  style={{
                    backgroundColor: "rgb(234, 236, 239)",
                    marginTop: 35,
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
