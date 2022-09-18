/// we import a function that we wrote to create a new instance of Apollo Server
import { createApolloServer } from '../';

// we will use supertest to test our server
import request from 'supertest';

// this is the query we use for our test
const queryData = {
  query: `query fetchZipCode($input: ZipCodeInfoInput!) {
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
  `,
  variables: {
    input: {
      countryCode: 'ar',
      zipCode: 1765,
    },
  },
};

describe('e2e demo', () => {
  let server: any, url: string;
  const PORT = 3030;

  // before the tests we will spin up a new Apollo Server
  beforeAll(async () => {
    // Note we must wrap our object destructuring in parentheses because we already declared these variables
    // We pass in the port as 0 to let the server pick its own ephemeral port for testing
    server = await createApolloServer(PORT);
    url = `http://localhost:${PORT}`;
  });

  // after the tests we will stop our server
  afterAll(async () => {
    await server?.stop();
  });

  it('says hello', async () => {
    // send our request to the url of the test server
    const response = await request(url).post('/').send(queryData);
    expect(response.statusCode).toBe(200);
    expect(response.body.data?.zipCodeInfo).toBeDefined();

    // eslint-disable-next-line no-unsafe-optional-chaining
    const { postCode, country, countryAbbreviation, places } =
      response?.body?.data?.zipCodeInfo;

    expect(postCode).toBeDefined();
    expect(postCode).toBe("1765");
    
    expect(country).toBeDefined();
    expect(country).toBe("Argentina");

    expect(countryAbbreviation).toBeDefined();
    expect(countryAbbreviation).toBe("AR");

    expect(places).toBeDefined();
    expect(places).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          placeName: expect.any(String),
          longitude: expect.any(String),
          latitude: expect.any(String),
          state: expect.any(String),
          stateAbbreviation: expect.any(String),
        }),
      ])
    );
  });
});
