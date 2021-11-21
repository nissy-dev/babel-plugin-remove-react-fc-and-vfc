import { tsTypeAnnotation, TSEntityName } from "@babel/types";
import { NodePath } from "@babel/traverse";
import { PluginObj } from "@babel/core";

const isAnnotateReactFCorVFC = (tsTypeNameNodePath: NodePath<TSEntityName>) =>
  tsTypeNameNodePath.isTSQualifiedName() &&
  tsTypeNameNodePath.get("left").isIdentifier({ name: "React" }) &&
  (tsTypeNameNodePath.get("right").isIdentifier({ name: "VFC" }) ||
    tsTypeNameNodePath.get("right").isIdentifier({ name: "FC" }));

export default function (): PluginObj {
  return {
    name: "babel-plugin-remove-react-fc-and-vfc",
    visitor: {
      VariableDeclarator(path) {
        const idNodePath = path.get("id");
        const initNodePath = path.get("init");

        if (idNodePath.isIdentifier() && initNodePath.isArrowFunctionExpression()) {
          idNodePath.get("typeAnnotation").traverse(
            {
              TSTypeReference(path) {
                const tsTypeNameNodePath = path.get("typeName");
                const tsTypeParameterNodePath = path.get("typeParameters");
                if (isAnnotateReactFCorVFC(tsTypeNameNodePath)) {
                  this.idNodePath.node.typeAnnotation = null;
                  if (tsTypeParameterNodePath.isTSTypeParameterInstantiation()) {
                    const typeParameterNode = tsTypeParameterNodePath.get("params")[0].node;
                    const parameterNode = this.initNodePath.get("params")[0].node;
                    parameterNode.typeAnnotation = tsTypeAnnotation(typeParameterNode);
                  }
                }
              },
            },
            {
              idNodePath,
              initNodePath,
            }
          );
        }
      },
    },
  };
}
