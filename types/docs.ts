interface Route {

}

interface Section {
  name: string;
  type: "internal" | "ros_ws";
  owner?: string;
  repo?: string;
  path: string;
  params?: { slug: string[] }[];
  routes?: Route[];
}

interface Sub {
  name: string;
  yearsActive: string;
  logo: string;
  sections: Section[];
}