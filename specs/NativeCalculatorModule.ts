import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
// Define the TurboModule contract for codegen.
export interface Spec extends TurboModule {
  addNumbers(a: number, b: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeCalculatorModule');
