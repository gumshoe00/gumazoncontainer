# Gumazon

Gumazon people trade center, translates and mirrors your offering into local markets in Africa, Asia, The Americas, Europe, and Australia.


## Metadata

- [repository](https://github.com/gumshoe00/gumazoncontainer/tree/main)


## Architecture

[DB](https://github.com/gumshoe00/gumazoncontainer/blob/main/README.md#db)

1. Create database using `postgresql`



[API](https://github.com/gumshoe00/gumazoncontainer/blob/main/README.md#api)

1. create the virtual environment using `Python 3.9.8`


2. Manage metadata and dependencies using `poetry`


3. install dependencies
   * `vunicorn`
   * `fastapi`


[UI](https://github.com/gumshoe00/gumazoncontainer/blob/main/README.md#ui)

1. create a server with `Node` with the feature `URL`s


2. Create an SPA with `Angular 14.0.1`


## Artifact

To produce a built artifact for the architecture:

1. Checkout the source code:
   - `git clone ... `
  

2. Install the build system.
   - `chmod +x file`


3. Execute the build system
   - `pyinstaller entry_point.py -F`.


## Code

> ### DB

1. ### DB Code:
   - `code ?`

2. ### DB Build:
   - `code ?`

3. ### DB Unit tests:
   - `code ?`

4. ### DB End-to-end tests:
   - `code ?`

5. ### DB Sign:
   - `code ?`

6. ### DB Seal:
   - `code ?`

7. ### DB Deliver:
   - `code ?`

8. ### DB Support:
   - mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon DB Support&body=My Database Question is ...`

.

> ### API

1. ### API Code:
   - `python3 ...`

2. ### API Build:
   - `pip build`

3. ### API Unit tests:
   - `unitest`

4. ### API End-to-end tests:
   - `unitest`

5. ### API Sign:
   - `python3 ?`

6. ### API Seal:
   - `python3 ?`

7. ### API Deliver:
   - `python3 ?`

8. ### API Support:
   - mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon API Support&body=My API Question is ...`

.

> ### UI

1. ### UI Code:
   - `ng ...`

2. ### UI Build:
   - `ng build`

3. ### UI Unit tests:
   - `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

4. ### UI End-to-end tests:
   - `ng e2e` to execute the end-to-end tests via a platform of your choice.  To use this command, you need to first add a package that implements end-to-end testing capabilities.

5. ### UI Sign:
   - `ng ?`

6. ### UI Seal:
   - `ng ?`

7. ### UI Deliver:
   - `ng ?`

8. ### UI Support:
   - mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon UI Support&body=My UI Question is ...`


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


