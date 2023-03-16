import { useCallback } from "react";
import { fahrenheitToCelsius } from "../helpers/converter";

const useFahrenheitToCelsius = () => {
    const celsius = useCallback((val: number): string | undefined => {
        if (val) {
            const value = fahrenheitToCelsius(val);
            return `${Math.round(value)}`;
        }
    }, []);

    return celsius;
}
export default useFahrenheitToCelsius;