#import "CalculatorModule.h"
#import <React/RCTBridgeModule.h>

@implementation CalculatorModule

RCT_EXPORT_MODULE(NativeCalculatorModule)

- (NSNumber *)addNumbers:(double)a b:(double)b
{
  return @(a + b);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeCalculatorModuleSpecJSI>(params);
}

@end
