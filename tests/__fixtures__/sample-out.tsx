import React from "react";
type PropsA = {
  value: number;
};
type PropsB = {
  id: string;
};
type PropsC<T> = {
  data: T;
};
const Test = 1;

const A = () => {
  return <div>"test"</div>;
};

const B = () => <div>"test"</div>;

const C = (props: PropsA) => {
  return <div>"test"</div>;
};

const D = (props: PropsA) => {
  return <div>"test"</div>;
};

const E = (props: { test: number }) => {
  return <div>"test"</div>;
};

const F = (props: { test: number }) => {
  return <div>"test"</div>;
};

const G = (props: PropsA & PropsB) => {
  return <div>"test"</div>;
};

const H = (props: PropsA & PropsB) => {
  return <div>"test"</div>;
};

const I = (props: PropsC<string>) => {
  return <div>"test"</div>;
};

const J = (props: PropsC<string>) => {
  return <div>"test"</div>;
};

const K = ({ value, ...otherProps }: PropsA) => {
  return <div>"test"</div>;
};

const L = ({ value, ...otherProps }: PropsA) => {
  return <div>"test"</div>;
};
