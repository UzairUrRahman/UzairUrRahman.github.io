# 9 Ridiculously Useful macOS Tahoe Settings You're 100% Not Using


## #1 Kill those auto-added menu bar icons with a single Terminal command


Open Terminal and run this:

```
defaults write NSGlobalDomain NSMenuEnableActionImages -bool false
```

Log out and log back in, and every auto-assigned icon disappears. Your menus go back to being clean text. Icons that developers specifically chose to add in their apps stay untouched, so this only removes the ones Apple's system automatically inserts.

If you want to try it for just one app first, you can target it specifically:

```
defaults write com.apple.finder NSMenuEnableActionImages -bool NO
```

And if you change your mind later:

```
defaults delete NSGlobalDomain NSMenuEnableActionImages
```

Source: Generated using IMGflip

## #2 Apply any SF Symbol to any folder, not just the ones Apple shows you


Here's how:

```
xattr -w 'com.apple.icon.folder#S' '{"sym":"camera.viewfinder"}' /path/to/folder
```

Replace  `camera.viewfinder`  with any valid SF Symbol name. You can browse the full library in  [Apple's SF Symbols app](https://developer.apple.com/sf-symbols/)  (free download from developer.apple.com) and use any symbol name you find there.

Source: Author Screenshot

It gets better. You can also use emoji:

```
xattr -w 'com.apple.icon.folder#S' '{"emoji":"🔍"}' /path/to/folder
```

Or even arbitrary text:

```
xattr -w 'com.apple.icon.folder#S' '{"emoji":"WIP"}' /path/to/folder
```

That  `#S`  in the command stands for XATTR_FLAG_SYNCABLE, which means the custom icon syncs through iCloud Drive to your other Macs. So you set it once, and it shows up everywhere.

To remove a custom icon:

```
xattr -d 'com.apple.icon.folder#S' /path/to/folder
```

## #3 Revert Liquid Glass tabs to how they used to look


```
defaults write -g NSSolariumWindowTabs -bool NO
```

That's it. No logout required for most apps (though some may need a restart). Your window tabs go back to the solid, clearly distinguishable style from macOS Sequoia, while everything else stays Liquid Glass.

To go back:

```
defaults delete -g NSSolariumWindowTabs
```

The key name "Solarium" is Apple's internal codename for the Liquid Glass window tab system, which is a fun little detail that confirms this is a deliberate toggle they built and chose not to expose. Make of that what you will.

## #4 Lock Screen clock customization exists, but it's hidden under Wallpaper settings

If you wanted to customize the clock font on your Mac's Lock Screen, where would you look? Lock Screen settings, probably. Maybe Display settings. Possibly Appearance.

It's under Wallpaper. System Settings > Wallpaper > Clock Appearance. From there, you get six font style options and a weight slider that controls the thickness of the clock text. You can also choose whether the customized clock appears only on the Lock Screen or on both the Lock Screen and the Screen Saver.