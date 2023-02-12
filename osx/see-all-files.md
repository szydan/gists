# See all files in finder

The MacOS Finder application by default is not showing you all files.
This is OK if you are not using your computer for programin. Why to see the hidden files, sure there is a reason they are hidden.

But if you are using your computer to program it is handy to always see all the files present in any folder in your system 
To do it paste the followin command in your terminal 

```sh
defaults write com.apple.finder AppleShowAllFiles YES
```


Press enter

Hold the ‘Option/alt’ key, then right click on the Finder icon in the dock and click Relaunch.

From now on you should see all hidden files in any folder 
To check open your home folder in the finder app by typing 

```
open ~/
```

You will see quite a few new files which starts with "." which you could not se before 

Note: 
We can always see all files from the terminal by using `ls -a` command


### To revert 

To revert run the following in the terminal

```sh
defaults write com.apple.finder AppleShowAllFiles NO
```
