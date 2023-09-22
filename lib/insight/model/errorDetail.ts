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


export type ErrorDetail = {
    /**
    * Details of the error. Not included in the response under certain situations.
    */
    'message'?: string/**/;
    /**
    * Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.
    */
    'property'?: string/**/;
}

