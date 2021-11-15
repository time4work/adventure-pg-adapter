import { Character } from './Character';
import { DialogNode } from './DialogNode';
import { DialogCondition } from './DialogCondition';
import { DialogResponse } from './DialogResponse';
export declare class Dialog {
    id: string;
    label: string;
    description?: string;
    character: Character;
    start: DialogNode;
    nodes: DialogNode[];
    conditions: DialogCondition[];
    responses: DialogResponse[];
    addId(): void;
}
