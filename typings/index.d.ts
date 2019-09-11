import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace isUrl {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
