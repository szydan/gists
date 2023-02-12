# Why terminal 

The majority of people use GUI (graphical user interface) when they first start to use a computer. They do it by clicking or touching things on the screen. 
This is the best way of interacting with computers today, maybe in the near future we will use our voices more and more, however this isn't always the fastest way of doing things on your computer.

For programmers the best way is to do things from a terminal level. 
There is couple of reasons for it, for example:

* common operations on files are much faster when you do them from the terminal, as quite often typing a few commands in your terminal can do as much as clicking a thousand times on your screen)
* doing things on terminal forces you to understand how things work on the lower level, quite often GUI is only a frontend for a more powerful command line application, and is exposing only a subset of all available command line options. When you know how to use things from the command line you can do more complicated operations, which are not supported from the GUI level.
* It also looks cool when your friends are looking over your shoulder ;-)

### Speed

Let's use a simple example to demonstrate the difference in speed 
Imagen you have a folder in which you keep your notes, maybe 10 files with just few lines of text in each. Now you remember that in one of the notes you wrote something about your friend Alice and now you want to find this file out

Below is a comparison using GUI and terminal.
On the left, the user clicks through every file and looks at the preview to see if there is anything about Alice, (assuming the notes are short and the full content would fit into the preview box)
On the right the user is doing the same opertion using the terminal and the command `grep`  

![](img/alice.gif)

That was only 5 files, now imagen if you have to search through a hundred or a thousand files. The sample directory with the notes files can be found [here](./terminal-example)

### Some of the often used terminal commands 


* `ls` - to list the content of the folder
* `mkdir` - to make a new folder
* `cp` - to copy files
* `rm` - to delete files and folders

On unix based systems like Linux or MacOS every command line option help can be checked by using `man` command followed by the name of the command. 
Other not build in commands usually have a build-in help that can be accessed by using `--help` flag.

Examples

If you wan to learn more aboud `ls` command you can use 

```
man ls
```   

If you ant to learn more about nvm 

```
nvm --help
```
