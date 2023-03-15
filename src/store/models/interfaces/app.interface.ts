export interface ICountryCityResponse {
    AdministrativeArea: { ID: string; LocalizedName: string; }
    Country: { ID: string; LocalizedName: string; }
    Key: string;
    LocalizedName: string;
    Rank: number | string;
    Type: string;
    Version: number;
}

export interface IForecastDataResponse {
    Headline: {
        EffectiveDate: Date;
        EffectiveEpochDate: number | Date;
        Severity: number;
        Text: string;
        Category: string;
        EndDate: Date | null;
        EndEpochDate: Date | null;
        MobileLink: string;
        Link: string;
    },
    DailyForecasts: [
        {
            Date: Date | string;
            EpochDate: number;
            Sun: {
                Rise: Date;
                EpochRise: number;
                Set: Date;
                EpochSet: number;
            },
            Moon: {
                Rise: Date;
                EpochRise: number;
                Set: Date;
                EpochSet: number;
                Phase: string;
                Age: number;
            },
            Temperature: {
                Minimum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Maximum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            RealFeelTemperature: {
                Minimum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                    Phrase: string;
                },
                Maximum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                    Phrase: string;
                }
            },
            RealFeelTemperatureShade: {
                Minimum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                    Phrase: string;
                },
                Maximum: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                    Phrase: string;
                }
            },
            HoursOfSun: number;
            DegreeDaySummary: {
                Heating: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Cooling: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            AirAndPollen: [{
                Name: string;
                Value: number;
                Category: string;
                CategoryValue: number;
                Type: string;
            }],
            Day: {
                Icon: number;
                IconPhrase: string;
                HasPrecipitation: boolean;
                ShortPhrase: string;
                LongPhrase: string;
                PrecipitationProbability: number;
                ThunderstormProbability: number;
                RainProbability: number;
                SnowProbability: number;
                IceProbability: number;
                Wind: {
                    Speed: {
                        Value: number;
                        Unit: string;
                        UnitType: number;
                    },
                    Direction: {
                        Degrees: number;
                        Localized: string;
                        English: string;
                    }
                },
                WindGust: {
                    Speed: {
                        Value: number;
                        Unit: string;
                        UnitType: number;
                    },
                    Direction: {
                        Degrees: number;
                        Localized: string;
                        English: string;
                    }
                },
                TotalLiquid: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Rain: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Snow: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Ice: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                HoursOfPrecipitation: number;
                HoursOfRain: number;
                HoursOfSnow: number;
                HoursOfIce: number;
                CloudCover: number;
                Evapotranspiration: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                SolarIrradiance: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            Night: {
                Icon: number;
                IconPhrase: string;
                HasPrecipitation: boolean;
                ShortPhrase: string;
                LongPhrase: string;
                PrecipitationProbability: number;
                ThunderstormProbability: number;
                RainProbability: number;
                SnowProbability: number;
                IceProbability: number;
                Wind: {
                    Speed: {
                        Value: number;
                        Unit: string;
                        UnitType: number;
                    },
                    Direction: {
                        Degrees: number;
                        Localized: string;
                        English: string;
                    }
                },
                WindGust: {
                    Speed: {
                        Value: number;
                        Unit: string;
                        UnitType: number;
                    },
                    Direction: {
                        Degrees: number;
                        Localized: string;
                        English: string;
                    }
                },
                TotalLiquid: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Rain: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Snow: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Ice: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                HoursOfPrecipitation: number;
                HoursOfRain: number;
                HoursOfSnow: number;
                HoursOfIce: number;
                CloudCover: number;
                Evapotranspiration: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                SolarIrradiance: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            Sources: string[],
            MobileLink: string;
            Link: string;
        }
    ]

}

export interface ICurrentDayResponse {
    DateTime: Date;
    EpochDateTime: number | Date;
    WeatherIcon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    IsDaylight: boolean;
    Temperature: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    RealFeelTemperature: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
    },
    RealFeelTemperatureShade: {
        Value: number;
        Unit: string;
        UnitType: number;
        Phrase: string;
    },
    WetBulbTemperature: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    DewPoint: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    Wind: {
        Speed: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        }
    },
    WindGust: {
        Speed: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    RelativeHumidity: number;
    IndoorRelativeHumidity: number;
    Visibility: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    Ceiling: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    UVIndex: number;
    UVIndexText: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    TotalLiquid: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    Rain: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    Snow: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    Ice: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    CloudCover: number;
    Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
    },
    MobileLink: string;
    Link: string;
}


export interface IHistoricalDayResponse {
    LocalObservationDateTime: Date;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: null | any;
    IsDayTime: boolean;
    Temperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    RealFeelTemperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
            Phrase: string;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
            Phrase: string;
        }
    },
    RealFeelTemperatureShade: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
            Phrase: string;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
            Phrase: string;
        }
    },
    RelativeHumidity: number;
    IndoorRelativeHumidity: number;
    DewPoint: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    Wind: {
        Direction: {
            Degrees: string;
            Localized: string;
            English: string;
        },
        Speed: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        }
    },
    WindGust: {
        Speed: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        }
    },
    UVIndex: number;
    UVIndexText: string;
    Visibility: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    ObstructionsToVisibility: string;
    CloudCover: number;
    Ceiling: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    Pressure: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    PressureTendency: {
        LocalizedText: string;
        Code: string;
    },
    Past24HourTemperatureDeparture: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    ApparentTemperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    WindChillTemperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    WetBulbTemperature: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    Precip1hr: {
        Metric: {
            Value: number;
            Unit: string;
            UnitType: number;
        },
        Imperial: {
            Value: number;
            Unit: string;
            UnitType: number;
        }
    },
    PrecipitationSummary: {
        Precipitation: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        PastHour: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        Past3Hours: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        Past6Hours: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        Past9Hours: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        Past12Hours: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        Past18Hours: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        },
        Past24Hours: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            },
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            }
        }
    },
    TemperatureSummary: {
        Past6HourRange: {
            Minimum: {
                Metric: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Imperial: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            Maximum: {
                Metric: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Imperial: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            }
        },
        Past12HourRange: {
            Minimum: {
                Metric: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Imperial: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            Maximum: {
                Metric: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Imperial: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            }
        },
        Past24HourRange: {
            Minimum: {
                Metric: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Imperial: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            },
            Maximum: {
                Metric: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                },
                Imperial: {
                    Value: number;
                    Unit: string;
                    UnitType: number;
                }
            }
        }
    },
    MobileLink: string;
    Link: string;
}