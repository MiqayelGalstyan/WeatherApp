import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IForecastDataResponse } from "../../../store/models/interfaces/app.interface";
import { format } from "date-fns";
import useWeatherIcon from "../../hooks/useWeatherIcon";
import { EUnitType } from "../../../store/models/enums/unitType.enum";
import useFahrenheitToCelsius from "../../hooks/useFahrenheitToCelsius";

interface IDailyForecastProps {
  data: IForecastDataResponse;
  type: typeof EUnitType[keyof typeof EUnitType];
}

const useStyles = makeStyles(() => ({
  bold: {
    fontWeight: "bold",
  },
  rightPaneItemImg: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
}));

const DailyForecast = ({ data, type }: IDailyForecastProps): JSX.Element => {
  const findWeatherIcon = useWeatherIcon();

  const celsius = useFahrenheitToCelsius();

  const styles = useStyles();

  return (
    <>
      {data.DailyForecasts.length > 0
        ? data.DailyForecasts.map((item: any, index: number) => (
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
              <Typography textAlign="right" minWidth={50}>
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
          ))
        : null}
    </>
  );
};

export default DailyForecast;
