import 'reflect-metadata';
import { Connection, ConnectionOptions } from 'typeorm';
import { Character } from './models/Character';
export interface PGAdapterConfigInterface {
    reconnect?: boolean;
    retryConnectionTime?: number;
    ConnectionOptions: ConnectionOptions;
}
export interface PGAdapterModelsInterface {
    character: Character;
}
export declare const Models: (typeof Character)[];
export declare class PGAdapter {
    static instance: PGAdapter;
    private _config;
    private _connection;
    constructor(config?: PGAdapterConfigInterface);
    connect(): Promise<void>;
    readonly connection: Connection | null;
}
