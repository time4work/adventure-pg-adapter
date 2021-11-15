import 'reflect-metadata';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Character } from './models/Character';

export interface PGAdapterConfigInterface {
    reconnect?: boolean;
    retryConnectionTime?: number;
    ConnectionOptions: ConnectionOptions;
}
export interface PGAdapterModelsInterface {
    character: Character;
}

const DEFAULT_CONFIG = {
    reconnect: false,
    retryConnectionTime: 3000,
};
export const Models = [
    Character,
];

export class PGAdapter {
    public static instance: PGAdapter;
    private _config: PGAdapterConfigInterface;
    private _connection: Connection | null;

    constructor(config?: PGAdapterConfigInterface) {
        if (PGAdapter.instance) {
            return PGAdapter.instance;
        }
        PGAdapter.instance = this;
        this._config = Object.assign(DEFAULT_CONFIG, config);
        this._connection = null;
    }

    public async connect(): Promise<void> {
        try {
            this._connection = await getConnection(this._config);
            console.log('[PG] Connected');
        } catch (error) {
            // TODO: reconnect
            if (error instanceof Error) {
                console.error('[PG] Error', error.message);
            } else {
                console.error('[PG] Error', error);
            }
        }
    }

    public get connection(): Connection | null {
        return this._connection;
    }
}

async function getConnection(config: PGAdapterConfigInterface): Promise<Connection> {
    return new Promise((resolve) => {
        getConnectionMethod(config, resolve);
    });
}

async function getConnectionMethod(config: PGAdapterConfigInterface, next: (connection: Connection) => void) {
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
