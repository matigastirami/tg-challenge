# Coding challenge
The idea behind this full stack coding challenge is to create a GraphQL server and consume a ZIP code API. In the frontend the GQL API will be consume to show info depending on the selected filters (Country + Zip Code).

## Running locally
* Pre-requisites: Have docker installed on your system

### Steps
1. cd into the root folder
2. execute `docker-compose up --build -d`
3. Navigate to `http://localhost:3000` on your browser

![Frontend App](/img/frontend.jpg "Frontend app")

## Access Apollo interactive client
1. Make sure your image `server` is running on docker.
2. Navigate to `http://localhost:4040/` on your browser.
3. Execute a query to see the behaviour: 

## Query
```gql
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
```

### Variables
```json
{
  "input": {
    "countryCode": "ar",
    "zipCode": 1765
  }
}
```

## Testing
For this challenge, I've added a E2E test for the backend. For executing it, cd into `./server` folder and the run:

`npm run test:e2e`