# Typescript Test Project

This project is meant to introduce several important ideas related to working with typescript. It covers basic functionality but does not go into great detail.

When working with typscript, the first step is to create the `tsconfig.json` file. This contains all necessary compiler configuration.

Ensure typescript is installed. I like to install it globally:

```
> npm i -g typescript
```

You can build the codebase by running:

```
> tsc build
```

## Configuration Notes

`"strict": true,` enables a bunch of options without having to individually set them to true. These make the typescript compiler a lot more picky about how types should be assigned. A couple of these options, which are set to true, are:
`noImplicitAny` causes TypeScript to flag anything without an explicit type declaration as an error.

## Testing

This example application uses `jest` as a test runner and assertion library. Ensure that you have the package `jest` installed for full package support.

Run all tests with:

```
> npm run test
```

### Note

Jest is configured to use CommonJS module imports by default. This is different than typescript's module import configuration for this project, which is 

## References

Most of these notes are taken from the official TypeScript documentation. Others are taken from Mozilla's developper documentation (MDM) or ECMA's official specification for JavaScript (which is not so easy to read and understand).

- <https://262.ecma-international.org/6.0/>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes>
- <https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>
- <https://www.typescriptlang.org/docs/handbook/2/classes.html>
- <https://www.typescriptlang.org/tsconfig/>
- <https://www.npmjs.com/package/ts-node>
