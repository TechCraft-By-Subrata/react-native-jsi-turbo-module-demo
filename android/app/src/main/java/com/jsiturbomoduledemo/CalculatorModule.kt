package com.jsiturbomoduledemo

import com.facebook.react.bridge.ReactApplicationContext
import com.jsiturbomoduledemo.specs.NativeCalculatorModuleSpec // 👈 Automatically available via Codegen

class CalculatorModule(reactContext: ReactApplicationContext) : NativeCalculatorModuleSpec(reactContext) {

    // Must match the string declared in the TypeScript Spec registry
    override fun getName(): String = NAME

    // Implement the addition method synchronously
    override fun addNumbers(a: Double, b: Double): Double {
        return a + b
    }

    companion object {
        const val NAME = "NativeCalculatorModule"
    }
}