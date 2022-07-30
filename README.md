# Gumazon

Gumazon people trade center, translates and mirrors your offering into local markets in Africa, Asia, The Americas, Europe, and Australia.

## Metadata

- [repository](https://github.com/gumshoe00/gumazoncontainer/tree/main)


## Architecture

To produce a built artifact for the architecture:


1. Checkout the source code:

   * DB
     * Create database using `postgresql`
   
   * API
      * create the virtual environment using `Python 3.9.8`
      * Manage metadata and dependencies using `poetry`
      * install dependencies
         * `vunicorn`
         * `fastapi`
      
   * [UI](./README.md#code)
      1. create a server with `Node` with the feature `URL`s
      2. Create an SPA with `Angular 14.0.1`


2. Install the build system.
   * `chmod +x file`


3. Execute the build system.
   1. Create executable using `PyInstaller`.
   

> PyInstaller workflow can be summed up by doing the following:
  1. Create an entry-point script that calls your main function.
  2. Install PyInstaller.
  3. Run PyInstaller on your entry-point.
  4. Test your new executable.
  5. Ship your resulting dist/ folder to users.


> What PyInstaller Does and How It Does It
  1. `Analysis`: Finding the Files Your Program Needs
  2. `Bundle`: Bundling to One Folder|File
     * ) How the One-Folder Program Works
     * ) How the One-File Program Works
  3. `UI`: Using a Console Window
  4. `Content`: Hiding the Source Code


> Email

- [ref](https://docs.python.org/3/library/email.examples.html)



## Artifact
### Code

#### DB:
- `code `

#### API:
- `code `

#### UI:
- `code `


### Build

#### DB:
- `code `

#### API:
- `pip build`

#### UI:
- `ng build`


### Test

#### Unit tests

##### DB:
- `code `

##### API:
- `unitest`

##### UI:
- `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


#### End-to-end tests

##### [@]()DB:
- `code `

##### [@]()Backend: 
- `unitest`


##### [@]()UI:  
- `ng e2e` to execute the end-to-end tests via a platform of your choice.

  `To use this command, you need to first add a package that implements end-to-end testing capabilities.`


## Sign

### [@]()DB:
- `code `

### [@]()API:
- `code `

### [@]()UI:
- `code `

## Seal

### [@]()DB:
- `code `

### [@]()API:
- `code `

### [@]()UI:
- `code `

## Deliver

### [@]()DB:
- `code `

### [@]()API:
- `code `

### [@]()UI:
- `code `

## Support

### [@]()DB:
- mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon DB Support&body=My Database Question is ...`

### [@]()API:
- mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon API Support&body=My API Question is ...`

### [@]()UI:
- mailto: `gumshoe.media.inc@gmail.com?subject=Gumazon UI Support&body=My UI Question is ...`

