
# Setting up nodejs


Even if you do not work with multiple nodejs versions it is good to be able to switch to different version. 
Best tool for that is called `node version manager` in short `nvm` and can be installed following instructions at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

After proper installation you should be able to run following command in your shell 


```sh
nvm --version # should print something like 0.39.0
```

Then to install a node type (below we will install two versions 16.18.0 and 16.18.1) 

```
nvm install 16.18.0
nvm install 16.18.1
```

If you want 16.18.1 to be the default one when you open new terminal 

```
nvm alias default 16.18.1
```

### To automate switching to correct version of node in your project

Create a file called `.nvmrc` in your project root folder.
The content of the file is just a node version 
See example in this repository [here](../../.nvmrc)
Then to switch to the correct node we just need to run 

```
nvm use
```

Setting it us this way in every project is super handy as you no longer have to remember what node version yu should be running. Nvm will figure it out for you

