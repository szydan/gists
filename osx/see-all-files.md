# See all files in finder

The MacOS Finder application by default is not showing you all your files.
Except your files applications are sometimes creating extra hidden files to keep information they need to work. 
This is OK if you are not using your computer for programing as you do not want to see the hidden files.
Most of the time they would be confusing as you will not know why they are there.

But if you are using your computer to program it is handy to always see all the files present in any folder in your system 
To do this, paste the following command in your terminal

```sh
defaults write com.apple.finder AppleShowAllFiles YES
```


Press enter

Hold the ‘Option/alt’ key, then right click on the Finder icon in the dock and click Relaunch.

From now on you should see all the hidden files in any folder 
To check, open your home folder in the finder app by typing

```
open ~/
```

You will see quite a few new files that start with "." which you could not see before

Note: 
We can always see all files from the terminal by using `ls -a` command


### To revert 

To revert run the following in the terminal

```sh
defaults write com.apple.finder AppleShowAllFiles NO
```
