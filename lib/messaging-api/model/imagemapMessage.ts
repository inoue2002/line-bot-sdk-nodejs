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
import { ImagemapAction } from './imagemapAction';
import { ImagemapBaseSize } from './imagemapBaseSize';
import { ImagemapVideo } from './imagemapVideo';
import { Message } from './message';
import { QuickReply } from './quickReply';
import { Sender } from './sender';


import { MessageBase } from './models';
export type ImagemapMessage = MessageBase & {
    /**
    */
    'baseUrl'?: string/**/;
    /**
    */
    'altText'?: string/**/;
    /**
    */
    'baseSize'?: ImagemapBaseSize/**/;
    /**
    */
    'actions'?: Array<ImagemapAction>/**/;
    /**
    */
    'video'?: ImagemapVideo/**/;
}

