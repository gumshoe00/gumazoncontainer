# Gumazon

Gumazon people trade center, translates and mirrors your offering into local markets in Africa, Asia, The Americas, Europe, and Australia.


## Metadata

- [repository](https://github.com/gumshoe00/gumazoncontainer/tree/main)


## Architecture

### DB

```json

{
   "db": {
      "specs": [
         "postgresql"
      ],
      "build": [
         "git clone ...",
         "code ?"
      ],
      "test_units": [
         "code ?"
      ],
      "test_e2e": [
         "code ?"
      ],
      "update": {
         "update": "python3 arc_version gumazon patch True True True",
         "commit": "git add . && git commit -m '`git branch --show-current`: `date +'%Y%m%d%H%M'` - `git log --oneline -1`'",
         "push": "git push"
      },
      "support": "mailto:gumshoe.media.inc@gmail.com?subject=Gumazon DB Support&body=My Database Question is ..."
   },
   "api": {
      "specs": [
         "postgresql"
      ],
      "build": [
         "git clone ...",
         "code ?"
      ],
      "test_units": [
         "code ?"
      ],
      "test_e2e": [
         "code ?"
      ],
      "update": {
         "commit": "git add . && git commit -m '`git branch --show-current`: `date +'%Y%m%d%H%M'` - `git log --oneline -1`'",
         "push": "git push"
      },
      "support": "mailto:gumshoe.media.inc@gmail.com?subject=Gumazon DB Support&body=My Database Question is ..."
   },
   "ui": {
      "specs": [
         "postgresql"
      ],
      "build": [
         "git clone ...",
         "code ?"
      ],
      "test_units": [
         "code ?"
      ],
      "test_e2e": [
         "code ?"
      ],
      "update": {
         "branch": "`git branch -m 'Main_UI'`",
         "commit": "Create UI, Node Server and Angular SPA for Domain URL",
         "version": "`grep -n version ./ui/gumazon/package.json | awk '{print $3}' | sed -e 's/\"//g' | sed -e 's/,//g' `",
         "tag": "git commit -am '`git branch --show-current`: UI - `git log --oneline -1`'",
         "push": "git push"
      },
      "support": "mailto:gumshoe.media.inc@gmail.com?subject=Gumazon UI Support&body=My UI Question is ..."
   }
}

```


1. #### DB Specs:
   - `postgresql`
  
2. #### DB Code:
   - Checkout the source code `git clone ... `
   - Make Changes to source code

3. #### DB Build:
   - `code ?`

4. #### DB Unit tests:
   - `code ?`

5. #### DB End-to-end tests:
   - `code ?`

6. #### DB Push:
   - update version
   - push changes to repo

7. #### DB Support:
   - mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon DB Support&body=My Database Question is ...`

.

### API

1. #### API Specs:
   - Virtual environment version `Python 3.9.8`
   - Metadata and dependencies manager `poetry`
   - Dependencies include `['vunicorn', 'fastapi']`

2. #### API Setup:
   - app_name/app_name/\__init__.py
     - `__version__ = str(subprocess.run(shlex.split(f"poetry version -s"), capture_output=True).stdout.decode('utf-8').strip())`


3. #### API Code:
   - Checkout the source code `git clone ... `
   - Make Changes to source code

4. #### API Build:
   - `pip build`

5. #### API Unit tests:
   - `unitest`

6. #### API End-to-end tests:
   - `unitest`

7. #### API Push:
   - update version
   - push changes to repo

8. #### API Support:
   - mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon API Support&body=My API Question is ...`

.


### UI

1. #### UI Specs:
   - Server with `Node`
   - SPA with `Angular 14.0.1`

2. #### UI Code:
   - Checkout the source code `git clone ... `
   - Make Changes to source code

3. #### UI Build:
   - `ng build`

4. #### UI Unit tests:
   - `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

5. #### UI End-to-end tests:
   - `ng e2e` to execute the end-to-end tests via a platform of your choice.  To use this command, you need to first add a package that implements end-to-end testing capabilities.

6. #### UI Push:
   - update version
   - push changes to repo

7. #### UI Support:
   - mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon UI Support&body=My UI Question is ...`



## Artifact

To produce a built artifact for the architecture:

1. Make the Executable:
   - Checkout the source code `git clone ... `
   - Create executable `pyinstaller entry_point.py -F`


2. Install the Executable.
   - `chmod +x file`


3. Execute the Executable
   - `executable_file`



## Note

> PyInstaller workflow can be summed up by doing the following:
1. Create an entry-point script that calls your main function.


2. Install PyInstaller.


3. Run PyInstaller on your entry-point.


4. Test your new executable.


5. Ship your resulting dist/ folder to users.

.

> What PyInstaller Does and How It Does It
  1. `Analysis`: Finding the Files Your Program Needs


  2. `Bundle`: Bundling to One Folder|File
     * ) How the One-Folder Program Works
     * ) How the One-File Program Works


  3. `UI`: Using a Console Window


  4. `Content`: Hiding the Source Code

.

> Email

  - [ref](https://docs.python.org/3/library/email.examples.html)


> Basic Shell Commands

  - timestamp=`date +'%Y%m%d%H%M'`


  - version_from_package_json=`grep -n "version" ./ui/gumazon/package.json | awk '{print $3}' | sed -e 's/"//g' | sed -e 's/,//g' `
    - Stages:=> grep_output( 3:  "version": "0.1.0", ) --> awk_output( "0.1.0", ) --> seds_output( 0.1.0 )


  - pump_version.sh

```shell
#!/usr/bin/env sh

# pump_version.sh

VERSION_FILE="ui/gumazon/package.json"
VERSION_KEY='version'

VERSION_LINE=$(grep -n "${VERSION_KEY}" "${VERSION_FILE}")
VERSION_VALUE_INDEX=$(sed -i -e 's/ /\n/' ${VERSION_LINE})
echo ${VERSION_VALUE_INDEX}
# CURRENT_VERSION Stages:=> grep_output( 3:  "version": "0.1.0", ) --> awk_output( "0.1.0", ) --> seds_output( 0.1.0 )
CURRENT_VERSION=$( grep -n "${VERSION_KEY}" "${VERSION_FILE}" | awk '{print $3}' | sed -e 's/"//g' | sed -e 's/,//g' )



```
