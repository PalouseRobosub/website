import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  wrapper: ({ children }) => <main>{children}</main>,
  input: (props) => {
    if (props.type === "checkbox" && props.disabled) {
      return (
        <input
          type="checkbox"
          defaultChecked={props.checked}
          style={{ pointerEvents: "none" }}
        />
      );
    }
    return <input {...props} />;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
