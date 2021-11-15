import { Dialog } from './Dialog';
export declare class Character {
    id: string;
    name: string;
    description?: string;
    dialogs: Dialog[];
    addId(): void;
}
