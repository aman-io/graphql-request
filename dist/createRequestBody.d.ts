import { Variables } from './types';
/**
 * Returns Multipart Form if body contains files
 * (https://github.com/jaydenseric/graphql-multipart-request-spec)
 * Otherwise returns JSON
 */
export default function createRequestBody(query: string, variables?: Variables): string | FormData;
