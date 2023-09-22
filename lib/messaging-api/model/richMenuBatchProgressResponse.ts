/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RequestFile } from './models';
import { RichMenuBatchProgressPhase } from './richMenuBatchProgressPhase';


export type RichMenuBatchProgressResponse = {
    /**
    */
    'phase': RichMenuBatchProgressPhase/**/;
    /**
    * The accepted time in milliseconds of the request of batch control the rich menu.  Format: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z) Timezone: UTC 
    */
    'acceptedTime': Date/**/;
    /**
    * The completed time in milliseconds of rich menu batch control. Returned when the phase property is succeeded or failed.  Format: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z) Timezone: UTC 
    */
    'completedTime'?: Date/**/;
}

export namespace RichMenuBatchProgressResponse {
}
