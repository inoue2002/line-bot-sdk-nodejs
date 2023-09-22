/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RequestFile } from './models';
import { GetStatisticsPerUnitResponseClick } from './getStatisticsPerUnitResponseClick';
import { GetStatisticsPerUnitResponseMessage } from './getStatisticsPerUnitResponseMessage';
import { GetStatisticsPerUnitResponseOverview } from './getStatisticsPerUnitResponseOverview';


/**
* Response object for `get statistics per unit`
*/
export type GetStatisticsPerUnitResponse = {
    /**
    */
    'overview': GetStatisticsPerUnitResponseOverview/**/;
    /**
    * Array of information about individual message bubbles.
    */
    'messages': Array<GetStatisticsPerUnitResponseMessage>/**/;
    /**
    * Array of information about opened URLs in the message.
    */
    'clicks': Array<GetStatisticsPerUnitResponseClick>/**/;
}

