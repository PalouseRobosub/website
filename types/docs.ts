interface Route {
  name: string;
  params: { slug: string[] }
  raw_url?: string | null;
}

interface Section {
  name: string;
  type: "internal" | "ros_ws";
  owner?: string;
  repo?: string;
  path: string;
  routes?: Route[];
}

interface Sub {
  name: string;
  yearsActive: string;
  logo: string;
  sections: Section[];
}