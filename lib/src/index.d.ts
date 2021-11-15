import 'reflect-metadata';
import { Connection, ConnectionOptions } from 'typeorm';
import { Character } from './models/Character';
import { Dialog } from './models/Dialog';
import { DialogNode } from './models/DialogNode';
import { DialogResponse } from './models/DialogResponse';
import { DialogCondition } from './models/DialogCondition';
export declare const Models: (typeof DialogCondition | typeof Dialog | typeof DialogResponse | typeof DialogNode | typeof Character)[];
export interface AdapterConfigInterface {
    reconnect?: boolean;
    retryConnectionTime?: number;
    ConnectionOptions: ConnectionOptions;
}
export interface AdapterModelsInterface {
    character: Character;
}
export declare class Adapter {
    private _config;
    connection: Connection;
    static instance: Adapter;
    constructor(config?: AdapterConfigInterface);
    connect(): Promise<Connection>;
}
