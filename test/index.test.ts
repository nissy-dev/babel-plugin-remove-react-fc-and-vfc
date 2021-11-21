import pluginTester from "babel-plugin-tester";
import myPlugin from "../src/index";

pluginTester({
  plugin: myPlugin,
  babelOptions: {
    parserOpts: {
      plugins: ["jsx", "typescript"],
    },
  },
  filename: __filename,
  tests: {
    "minimum test case": {
      code: `
const A: React.FC<Props> = (props) => {
  return <div>"test"</div>;
};
      `,
      output: `
const A = (props: Props) => {
  return <div>"test"</div>;
};
      `,
    },
    "general test case": {
      fixture: "__fixtures__/sample.tsx",
      outputFixture: "__fixtures__/sample-out.tsx",
    },
  },
});
