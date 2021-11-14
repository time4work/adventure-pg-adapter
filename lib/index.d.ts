declare module "models/DialogCondition" {
    import { Dialog } from "models/Dialog";
    import { DialogResponse } from "models/DialogResponse";
    export enum ConditionComparisonEnum {
        LESS_THEN = "lt",
        GREATER_THEN = "gt",
        EQUAL = "eq"
    }
    export class DialogCondition {
        id: number;
        dialog?: Dialog;
        response?: DialogResponse;
        amount: number;
        exist: number;
        comparison: ConditionComparisonEnum;
        addId(): void;
    }
}
declare module "models/DialogResponse" {
    import { DialogNode } from "models/DialogNode";
    import { DialogCondition } from "models/DialogCondition";
    import { Dialog } from "models/Dialog";
    export class DialogResponse {
        id: number;
        label: string;
        description?: string;
        dialog: Dialog;
        parent: DialogNode;
        next: DialogNode;
        conditions: DialogCondition[];
        addId(): void;
    }
}
declare module "models/DialogNode" {
    import { Dialog } from "models/Dialog";
    import { DialogResponse } from "models/DialogResponse";
    export class DialogNode {
        id: number;
        label: string;
        description?: string;
        timeout?: number;
        next?: DialogNode;
        dailog: Dialog;
        responses: DialogResponse[];
        addId(): void;
    }
}
declare module "models/Dialog" {
    import { Character } from "models/Character";
    import { DialogNode } from "models/DialogNode";
    import { DialogCondition } from "models/DialogCondition";
    import { DialogResponse } from "models/DialogResponse";
    export class Dialog {
        id: number;
        label: string;
        description?: string;
        character: Character;
        start: DialogNode;
        nodes: DialogNode[];
        conditions: DialogCondition[];
        responses: DialogResponse[];
        addId(): void;
    }
}
declare module "models/Character" {
    import { Dialog } from "models/Dialog";
    export class Character {
        id: number;
        name: string;
        description?: string;
        dialogs: Dialog[];
        addId(): void;
    }
}
declare module "adventure-pg-adapter" {
    import 'reflect-metadata';
    import { Connection, ConnectionOptions } from 'typeorm';
    import { Character } from "models/Character";
    export interface PGAdapterConfigInterface {
        reconnect: boolean;
        retryConnectionTime: number;
        ConnectionOptions: ConnectionOptions;
    }
    export interface PGAdapterModelsInterface {
        character: Character;
    }
    export class PGAdapter {
        static instance: PGAdapter;
        private _config;
        private _connection;
        constructor(config?: PGAdapterConfigInterface);
        connect(): Promise<void>;
        readonly modules: PGAdapterModelsInterface;
        readonly connection: Connection | null;
    }
}
