import { Dialog } from './Dialog';
import { DialogResponse } from './DialogResponse';
export declare class DialogNode {
    id: string;
    label: string;
    description?: string;
    timeout?: number;
    next?: DialogNode;
    dailog: Dialog;
    responses: DialogResponse[];
    addId(): void;
}
