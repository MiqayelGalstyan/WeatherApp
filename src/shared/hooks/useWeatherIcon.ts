import { useCallback } from "react";
import { IWeatherIcon } from "../../store/models/interfaces/icon.interface";
import { weatherIconsData } from "../constants/weatherIconsData";

const useWeatherIcon = () => {

    const findWeatherIcon = useCallback((val: string) => {
        if (val) {
            const icon = weatherIconsData.find(
                (item: IWeatherIcon) => item.value?.toLowerCase() === val?.toLowerCase()
            );
            return icon?.img ?? weatherIconsData[0].img;
        }
    }, []);

    return findWeatherIcon;

}

export default useWeatherIcon;