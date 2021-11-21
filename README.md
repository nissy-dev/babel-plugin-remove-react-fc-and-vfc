# babel-plugin-remove-react-fc-and-vfc

![release](https://github.com/nissy-dev/babel-plugin-remove-react-fc-and-vfc/actions/workflows/release.yml/badge.svg)
[![License: MIT](https://img.shields.io/github/license/nissy-dev/babel-plugin-remove-react-fc-and-vfc.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/babel-plugin-remove-react-fc-and-vfc.svg)](https://badge.fury.io/js/babel-plugin-remove-react-fc-and-vfc)

This plugin removes `React.VFC` and `React.FC` annotation.

Input:

```ts
const Component: React.FC<Props> = (props) => {
  return <div>{props.value}</div>;
};
```

Output:

```ts
const Component = (props: Props) => {
  return <div>{props.value}</div>;
};
```

## Why?

As `React.XXX` is modified frequently like [`React.SFC` was removed](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30364) or [the children type will be removed from React.FC](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/46691), I think we should not use `React.XXX` type as much as possible.

See more details

- [Remove React.FC from Typescript template](https://github.com/facebook/create-react-app/pull/8177)
- [【検証】React.FC と React.VFC はべつに使わなくていい説](https://kray.jp/blog/dont-have-to-use-react-fc-and-react-vfc/)

## Install

```bash
$ npm install --save-dev babel-plugin-remove-react-fc-and-vfc
```

and add it to your `.babelrc`.

```json
{
  "plugins": ["remove-react-fc-and-vfc"]
}
```

## Contributing

Welcome your contribution!

See also [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md).

## Setup

```
$ git clone git@github.com:nissy-dev/babel-plugin-remove-react-fc-and-vfc.git
$ cd babel-plugin-remove-react-fc-and-vfc
$ npm ci
```

## Development Tools

```
// run tsc, eslint, prettier
$ npm run lint

// run test
$ npm run test
```
