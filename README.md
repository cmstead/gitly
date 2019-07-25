# Gitly #

Make git friendly - Gitly is a wrapper over the Git CLI to friendlify day-to-day git interaction.  Currently Gitly is in development and only some of the most common behaviors are supported.

## Installation ##

To install gitly, run the following command:

`npm install @cmstead/gitly -g`

Now you're ready to go!

## Usage ##

### Menus ###

The simplest way to use Gitly is to simply run:

`gitly`

This will walk you through the process of working with Git through a friendly, human-readable menu system.

As each command is run, the associated Git command will be displayed to the screen.  If you are interested in getting better with Git, these commands will provide insight into how you can accomplish the same thing without gitly.

Some commands have richer options which can be accessed through the menu by typing partial CLI commands.  A good example is `commit`:

`gitly commit`

When running commit like this (which can also be accessed through the standard menu options), you can enter a simple commit message as well as opt to select certain files to commit.

### Command Line ###

For full command-line control without using the menu system, the following commands are supported:

#### commit ####

`gitly commit "This is my commit message"`

This is equivalent to:

```
git add --all
git commit -m "This is my commit message"
```

#### pull ####

`gitly pull`

This is equivalent to:

```
git pull origin master
```

#### push ####

`gitly push`

This is equivalent to:

```
git push origin master
```
