import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // wrap the default export of an MDX file in <main>
    wrapper: ({ children }) => <main className="prose prose-neutral h-full max-w-none flex-1">{children}</main>,
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
