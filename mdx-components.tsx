import type { MDXComponents } from "mdx/types";
import {ScrollArea} from "@/components/ui/scroll-area";

const components: MDXComponents = {
  // wrap the default export of an MDX file in <main>
    wrapper: ({ children }) => <ScrollArea className="prose prose-neutral dark:prose-invert h-full max-w-none overflow-y-auto p-8">{children}</ScrollArea>,
  // override input elements from MDX files
  input: (props) => {
    if (props.type === "checkbox" && props.disabled) {
      // add color to disabled checkboxes
      return (
        <input
          type="checkbox"
          defaultChecked={props.checked}
          style={{ pointerEvents: "none" }}
        />
      );
    }
    // leave all other input elements unaffected
    return <input {...props} />;
  },
  code: (props) => <code {...props}></code>
};

export function useMDXComponents(): MDXComponents {
  return components;
}
