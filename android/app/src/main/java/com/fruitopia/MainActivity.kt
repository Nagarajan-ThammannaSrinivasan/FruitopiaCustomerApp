package com.fruitopia

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;
import androidx.appcompat.app.AppCompatDelegate
import com.zoontek.rnbootsplash.RNBootSplash
import android.graphics.Color

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "Fruitopia"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
      AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
      super.onCreate(null)
      RNBootSplash.init(this, R.style.BootTheme) // ⬅️ initialize the splash screen
      //getWindow().setDecorFitsSystemWindows(false); //For insets testing
      window.setNavigationBarColor(Color.parseColor("#F97316"));
  }
}
