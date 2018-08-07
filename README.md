# Ionic Starter Kit

Ionic is a free-to-use framework that allows you to build web and mobile apps for iOS, Android and Windows Phone, all from one codebase.

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

# How to use this template

Just clone this repository and execute this commands or open with android studio for android and xcode editor for iOS.

# Requirements

- Node.js
- Ionic CLI and Cordova : Just follow this hello world tutorial  https://ionicframework.com/docs/intro/installation/
- JDK 8
- Latest Gradle in path
- Android tools (coming soon in wiki) or latest Android Studio
- iOS : I don't know :S

# Web

This is just for hello world or test purposes. Execute:

```bash
$ ionic serve
```
Log must contain something like:

```
[OK] Development server running!
     Local: http://localhost:8100
```

So open your browser pointing to : http://localhost:8100

![web-ionic](https://raw.githubusercontent.com/jrichardsz/static_resources/master/ionic-web.png)

# Android

After install all tools required by android to build apps, execute :


```bash
$ ionic platform add android
$ ionic cordova build android
```

Log must contain something like :


```
BUILD SUCCESSFUL in 57s
44 actionable tasks: 1 executed, 43 up-to-date
Built the following apk(s):
	/my_folder/../EMenu/platforms/android/build/outputs/apk/debug/android-debug.apk
```

**android-debug.apk** is ready to install in a lot of android devices (manual copy and install or using adb)

This app has only 3 ui interfaces:

<p float="left">
  <img src="https://raw.githubusercontent.com/jrichardsz/static_resources/master/android-ionic-01.jpg" width="200" />
  <img src="https://raw.githubusercontent.com/jrichardsz/static_resources/master/android-ionic-02.jpg" width="200" />
  <img src="https://raw.githubusercontent.com/jrichardsz/static_resources/master/android-ionic-03.jpg" width="200" />
</p>



# iOS (I dont know :S )

In a mac, just follow this tutorial :

https://devfanaticblog.com/how-to-build-the-ipa-package-with-apache-cordova-or-ionic-framework-command-line-tools/

Or

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```
or

```bash
$ ionic build ios –device –release
```

or

```bash
$ ionic cordova build ios
$ ionic package build ios --profile dev
```

Put screenshoots here!!


# Versioning

1.0.0

# Authors

* **Richard Leon Ingaruca** - [Jrichardsz](https://github.com/jrichardsz)

* **Origin** - [https://github.com/shamique/EMenu.git](https://github.com/shamique/EMenu.git)
