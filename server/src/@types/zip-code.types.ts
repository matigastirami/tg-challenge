export type IZipCodeInfo = {
  postCode: string;
  countryCode: string;
  countryAbbreviation: string;
  places: {
    placeName: string;
    longitude: number;
    latitude: number;
    state: string;
    stateAbbreviation: string;
  };
};

export type IZipCodeInfoInput = {
  countryCode: string;
  zipCode: number;
};
