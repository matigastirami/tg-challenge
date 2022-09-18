import env from "../lib/env";
import httpClient from "../lib/http-client";

export default class ZipCodeService {

    private readonly serviceUrl = env.ZIPPOPOTAM_API_URL;

    getZipCodeInfo(countryCode: string, zipCode: number) {
        console.log(this.serviceUrl);
        return httpClient.get(
            `${this.serviceUrl}/${countryCode}/${zipCode}`
        );
    }
}