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
import { Action } from './action';
import { FlexComponent } from './flexComponent';
import { FlexSpan } from './flexSpan';


import { FlexComponentBase } from './models';
export type FlexText = FlexComponentBase & {
    /**
    */
    'flex'?: number/**/;
    /**
    */
    'text'?: string/**/;
    /**
    */
    'size'?: string/**/;
    /**
    */
    'align'?: FlexText.AlignEnum/**/;
    /**
    */
    'gravity'?: FlexText.GravityEnum/**/;
    /**
    */
    'color'?: string/**/;
    /**
    */
    'weight'?: FlexText.WeightEnum/**/;
    /**
    */
    'style'?: FlexText.StyleEnum/**/;
    /**
    */
    'decoration'?: FlexText.DecorationEnum/**/;
    /**
    */
    'wrap'?: boolean/**/;
    /**
    */
    'lineSpacing'?: string/**/;
    /**
    */
    'margin'?: string/**/;
    /**
    */
    'position'?: FlexText.PositionEnum/**/;
    /**
    */
    'offsetTop'?: string/**/;
    /**
    */
    'offsetBottom'?: string/**/;
    /**
    */
    'offsetStart'?: string/**/;
    /**
    */
    'offsetEnd'?: string/**/;
    /**
    */
    'action'?: Action/**/;
    /**
    */
    'maxLines'?: number/**/;
    /**
    */
    'contents'?: Array<FlexSpan>/**/;
    /**
    */
    'adjustMode'?: FlexText.AdjustModeEnum/**/;
    /**
    */
    'scaling'?: boolean/**/;
}

export namespace FlexText {
    export enum AlignEnum {
        Start = <any> 'start',
        End = <any> 'end',
        Center = <any> 'center'
    }
    export enum GravityEnum {
        Top = <any> 'top',
        Bottom = <any> 'bottom',
        Center = <any> 'center'
    }
    export enum WeightEnum {
        Regular = <any> 'regular',
        Bold = <any> 'bold'
    }
    export enum StyleEnum {
        Normal = <any> 'normal',
        Italic = <any> 'italic'
    }
    export enum DecorationEnum {
        None = <any> 'none',
        Underline = <any> 'underline',
        LineThrough = <any> 'line-through'
    }
    export enum PositionEnum {
        Relative = <any> 'relative',
        Absolute = <any> 'absolute'
    }
    export enum AdjustModeEnum {
        ShrinkToFit = <any> 'shrink-to-fit'
    }
}
