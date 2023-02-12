# Setting up your editor (IDE)

Integrated Development Environment for short IDE is much more than just text editor.
These days it will come with all you need for your work

* text editor
* debugger
* console
* plugins

When you are just starting to program you need only a simple text editor.
However the more you want to do the the more tools you will need and here an IDE comes handy.

These days one of the most popular one is VSCode and all examples in this gists will use it.
It is free and can be installed from [here](https://code.visualstudio.com/) 

### Things good to do before you start using it 


#### Configure a command line shortcut  

Make sure that you configure your shell to have a nice alias to open the editor 
On different system we might need to do it differently or it might already be working after the installation 

Go to your project main folder and type

```
code .
```
If editors open and show you files from the current folder all is good 

If it does not work out of the box you need to add VSCode executable to your PATH 
On OSX it would be adding a similar line to your `.zshrc` or `.bashrc` or similar files for other shells. 

```
export PATH="/Applications/Visual Studio Code.app/Contents/Resources/app/bin:$PATH"
```

#### Disable telemetry

Another thing you might want to do is to disable the telemetry, if you do not want to send usage information back to Microsoft

For MacOSx

```
Code > Preferences > Settings
search for telemetry , and set the Telemetry: Telemetry Level setting to off
```

For Linux

```
From File > Preferences > Settings
search for telemetry , and set the Telemetry: Telemetry Level setting to off
```

#### Add first plugin 

You will need a few, but the first one good to install would be a spellchecker 
Click Extensions on the left vertical menu
Search for `spell` there is a good few to select from 
Select the one you want click install  

![](img/vscode-plugin-installation.png)