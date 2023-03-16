import { Box } from "@mui/material";
import { useMemo } from "react";
import { EUnitType } from "../../store/models/enums/unitType.enum";
import { ICurrentDayResponse } from "../../store/models/interfaces/app.interface";
import { fahrenheitToCelsius } from "../helpers/converter";
import CardUI from "../ui/Card";

interface ICardsProps {
  data: ICurrentDayResponse;
  type:typeof EUnitType[keyof typeof EUnitType];
}

const Cards = ({ data,type }: ICardsProps): JSX.Element => {

    const realTemperatureFeelsLike = useMemo((): string | undefined => {
        if (data?.RealFeelTemperature.Value) {
          const value =
            type === EUnitType.CELSIUS
              ? `${Math.round(
                  fahrenheitToCelsius(data.RealFeelTemperature.Value)
                )}\xB0`
              : `${data.RealFeelTemperature.Value}\xB0F`;
          return value;
        }
      }, [data?.RealFeelTemperature?.Value, type]);


  return (
    <>
      <Box display="flex" mt={5} justifyContent="space-between" flexWrap="wrap">
        <CardUI
          title="Humidity"
          value={data.IndoorRelativeHumidity}
          width="48%"
        />
        <CardUI
          title="Wind"
          value={`${data.Wind.Speed.Value} ${data.Wind.Speed.Unit}`}
          width="48%"
        />
        <CardUI
          title="Chance of Rain"
          value={`${data.RainProbability}%`}
          width="48%"
        />
        <CardUI
          title="Feels Like"
          value={`${realTemperatureFeelsLike}`}
          width="48%"
        />
      </Box>
    </>
  );
};

export default Cards;
