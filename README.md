# TYPESCRIPT LEARNING TUTORIAL

## Creating a repo:

```sh
gh repo create REPONAME --public --clone
cd REPONAME
```

## Initializing a package.json file:

```sh
npm init -y
```

## Installing Typescript as a devDependency:

```sh
npm i -D typescript
```

## Initializing a tcsonfig.json file(settings file for typescript):

```sh
npx tsc --init
```

## Creating a typescript file:

```sh
touch index.ts
```

## Creating a start command:

```json
{
    "start": "tsc"
}
```

## Changing the setting in tsconfig file to generate a js file after the compliation of ts file:

```json
{
    "outDir": "./dist"
}
```

## Command to complie ts file:

```sh
npm start
```

## TS Concepts:

* Data Types:
  * Primitive Data Type:
    * String
      * Ex: let str: string = "Puneeth"
    * Number
      * Ex: let firstNumber: number = 1;
    * Boolean
      * Ex: let bool: boolean = true;
  * Non - Primitive DT:
    * Array
      * Array of Numbers
        * Ex: let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
      * Array of String
        * Ex: let arrayOfString: string[] = ["Puneeth", "Kumar"];
    * Object
  * Union Type DT: Accepts any one of the provided DT
    * Ex: let random: (number | string) = "RANDOM";
  * Any DT: By default if we don't provide any DataType to a variable it will be set to "any"
    * Ex: let thisIsAnyType: any = {};
* Type Definition:
  * Ex: types are defined in order to use a same type definition multiple times
* Interface Definition:
  * Ex: It is also another way to name Object type

