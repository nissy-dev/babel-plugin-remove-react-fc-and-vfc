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

const A: React.FC = () => {
  return <div>"test"</div>;
};

const B: React.VFC = () => <div>"test"</div>;

const C: React.FC<PropsA> = (props) => {
  return <div>"test"</div>;
};

const D: React.VFC<PropsA> = (props) => {
  return <div>"test"</div>;
};

const E: React.FC<{ test: number }> = (props) => {
  return <div>"test"</div>;
};

const F: React.VFC<{ test: number }> = (props) => {
  return <div>"test"</div>;
};

const G: React.FC<PropsA & PropsB> = (props) => {
  return <div>"test"</div>;
};

const H: React.VFC<PropsA & PropsB> = (props) => {
  return <div>"test"</div>;
};

const I: React.FC<PropsC<string>> = (props) => {
  return <div>"test"</div>;
};

const J: React.VFC<PropsC<string>> = (props) => {
  return <div>"test"</div>;
};

const K: React.FC<PropsA> = ({ value, ...otherProps }) => {
  return <div>"test"</div>;
};

const L: React.VFC<PropsA> = ({ value, ...otherProps }) => {
  return <div>"test"</div>;
};
