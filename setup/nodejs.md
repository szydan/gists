
# Setting up nodejs


Even if you don't work with multiple nodejs versions, it's good to be able to switch to a different version. 
The best tool for that is called `nvm` short for `node version manager` and can be found at this link [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

When installing nvm pay attension to the lines printed in your terminal at the end of the installation process. Usually it will ask you to paste a line into one of `.profile` files for your shell. 
For example I am using the bash shell so I had to paste it into file called `~/.bashrc` 
but if you use the zsh shell you might need to paste it into a different file called `~/.zshrc`


After you install the 'nvm' you should be able to run the following command in your terminal.

```sh
nvm --version # should print something like 0.39.0
```

Then if you need to install a specific nodejs version, (for example 16.18.0 or 16.18.1) just use the instructions below.

```
nvm install 16.18.0
nvm install 16.18.1
```

If you want 16.18.1 to be the default one when you open a new terminal then run the following command.

```
nvm alias default 16.18.1
```


### To automate switching to correct version of node in your project

Create a file called `.nvmrc` in your project main folder.
The content of the file should be the nodejs version you want to use for your project.
See example in this repository [here](../../../.nvmrc)
Finally, to switch to the correct nodejs go to the main folder of your project and type the following in the terminal. 

```
nvm use
```

Setting it up this way in every project is super handy as you no longer have to remember what nodejs version you should pick. Nvm will figure it out for you 👍. The only command to remember will be `nvm use` 

To learn all you can do with nvm you can always use the build in help by typing 

```
nvm --help
```

