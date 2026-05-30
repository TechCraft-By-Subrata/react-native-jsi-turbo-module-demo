package com.jsiturbomoduledemo

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class CalculatorPackage : TurboReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == CalculatorModule.NAME) {
            CalculatorModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            val moduleInfos = HashMap<String, ReactModuleInfo>()
            moduleInfos[CalculatorModule.NAME] = ReactModuleInfo(
                CalculatorModule.NAME,
                CalculatorModule.NAME,
                false, // canOverrideExistingModule
                false, // needsEagerInit
                false, // isCxxModule
                true   // isTurboModule 👈 Tells the runtime this is a JSI module!
            )
            moduleInfos
        }
    }
}