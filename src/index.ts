import 'reflect-metadata';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Character } from './models/Character';
import { Dialog } from './models/Dialog';
import { DialogNode } from './models/DialogNode';
import { DialogResponse } from './models/DialogResponse';
import { DialogCondition } from './models/DialogCondition';

export const Models = [
    Character,
    Dialog,
    DialogNode,
    DialogResponse,
    DialogCondition,
];

export interface AdapterConfigInterface {
    reconnect?: boolean;
    retryConnectionTime?: number;
    ConnectionOptions: ConnectionOptions;
}
export interface AdapterModelsInterface {
    character: Character;
}

const DEFAULT_CONFIG = {
    reconnect: false,
    retryConnectionTime: 3000,
};

export class Adapter {
    private _config: AdapterConfigInterface;
    public connection: Connection;
    public static instance: Adapter;

    constructor(config?: AdapterConfigInterface) {
        if (Adapter.instance) {
            return Adapter.instance;
        }
        Adapter.instance = this;
        this._config = Object.assign(DEFAULT_CONFIG, config);
    }

    public async connect(): Promise<Connection> {
        this.connection = await getConnection(this._config);
        console.log('[PG] Connected');
        return this.connection;
    }
}

async function getConnection(config: AdapterConfigInterface): Promise<Connection> {
    return new Promise((resolve) => {
        getConnectionMethod(config, resolve);
    });
}

async function getConnectionMethod(config: AdapterConfigInterface, next: (connection: Connection) => void) {
    try {
        const connection = await createConnection(config.ConnectionOptions);
        next(connection);
    } catch (error) {
        console.error('[PG] Connection error', error);
        setTimeout(() => {
            getConnectionMethod(config, next);
        }, config.retryConnectionTime);
    }
}
