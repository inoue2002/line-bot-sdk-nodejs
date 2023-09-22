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


export type AppTypeTile = {
    /**
    * users\' OS
    */
    'appType'?: AppTypeTile.AppTypeEnum/**/;
    /**
    * Percentage
    */
    'percentage'?: number/**/;
}

export namespace AppTypeTile {
    export enum AppTypeEnum {
        Ios = <any> 'ios',
        Android = <any> 'android',
        Others = <any> 'others'
    }
}
