import { SelectClassKey } from './Select';

declare const selectClasses: Record<SelectClassKey, string>;

export function getSelectUtilityClass(slot: string): string;

export default selectClasses;
