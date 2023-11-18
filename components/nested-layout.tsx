import type { ReactElement } from "react";
import type { NestedLayout } from "types/NestedLayout";

function NestedLayout({children}: NestedLayout) {
  return <div>{children}</div>;
}

export default NestedLayout;
