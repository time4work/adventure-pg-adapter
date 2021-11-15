import { DialogNode } from './DialogNode';
import { DialogCondition } from './DialogCondition';
import { Dialog } from './Dialog';
export declare class DialogResponse {
    id: string;
    label: string;
    description?: string;
    dialog: Dialog;
    parent: DialogNode;
    next: DialogNode;
    conditions: DialogCondition[];
    addId(): void;
}
