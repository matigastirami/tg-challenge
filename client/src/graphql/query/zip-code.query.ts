import { gql } from "@apollo/client";

export const ZIP_CODE_INFO = gql`
  query fetchZipCode($input: ZipCodeInfoInput!) {
    zipCodeInfo(input: $input) {
      postCode
      country
      countryAbbreviation
      places {
        placeName
        longitude
        latitude
        state
        stateAbbreviation
      }
    }
  }
`;
