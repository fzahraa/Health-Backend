
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddShotArgs {
    price: number;
    name: string;
    code: string;
}

export interface CreateItemInput {
    data: string;
}

export interface UpdateShotArgs {
    id: number;
    price: number;
    name: string;
    code: string;
}

export interface Shot {
    id: number;
    price: number;
    name: string;
    code: string;
}

export interface IQuery {
    shots(): Shot[] | Promise<Shot[]>;
    findShotById(shotId: number): Shot[] | Promise<Shot[]>;
}

export interface IMutation {
    deleteShot(shotId: number): string | Promise<string>;
    addShot(addShotArgs: AddShotArgs): string | Promise<string>;
    createItem(input: CreateItemInput): string | Promise<string>;
    updateShot(updateShotArgs: UpdateShotArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
