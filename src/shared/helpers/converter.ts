export const celsiusToFahrenheit = (celsius: number) => {
    const cTemp = celsius;
    const cToFahr = cTemp * 9 / 5 + 32;
    //xB0F
    return cToFahr;
}

export const fahrenheitToCelsius = (fahrenheit: number) => {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * 5 / 9;

    return fToCel;
}

