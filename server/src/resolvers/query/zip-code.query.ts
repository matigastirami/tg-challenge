import { handleApiError } from '../../lib/api-error';
import logger from '../../lib/logger';
import ZipCodeService from '../../service/zipcode.service';
import { camelize } from '../../util/object.util';

export async function queryZipCodeInfo(parent: any, args: any) {
  const { countryCode, zipCode } = args.input;
  const zipCodeService = new ZipCodeService();

  try {
    const { data } = await zipCodeService.getZipCodeInfo(countryCode, zipCode);

    const parsed = camelize(data);

    return parsed;
  } catch (error: any) {
    logger.error(
      `There was an error fetching zipCodeInfo from API: ${error.message}`
    );

    const { 
        status = 500, 
        statusText = 'INTERNAL_SERVER_ERROR' 
    } = error.response;

    handleApiError(status, statusText);
  }
}
