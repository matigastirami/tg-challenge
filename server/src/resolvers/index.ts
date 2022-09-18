import { queryZipCodeInfo } from './query/zip-code.query';

const resolvers = {
  Query: {
    zipCodeInfo: queryZipCodeInfo,
  },
};

export { resolvers };
