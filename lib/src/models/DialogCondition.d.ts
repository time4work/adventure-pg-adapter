import { Dialog } from './Dialog';
import { DialogResponse } from './DialogResponse';
export declare enum ConditionComparisonEnum {
    LESS_THEN = "lt",
    GREATER_THEN = "gt",
    EQUAL = "eq"
}
export declare class DialogCondition {
    id: string;
    dialog?: Dialog;
    response?: DialogResponse;
    amount: number;
    exist: number;
    comparison: ConditionComparisonEnum;
    addId(): void;
}
