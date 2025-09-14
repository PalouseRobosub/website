import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // wrap the default export of an MDX file in <main>
  wrapper: ({ children }) => <main>{children}</main>,
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
};

export function useMDXComponents(): MDXComponents {
  return components;
}
