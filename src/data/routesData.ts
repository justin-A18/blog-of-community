interface Routes {
  name: string;
  path: string;
}

const routes: Routes[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "blog",
    path: "/blog/inicio",
  },
  {
    name: "about",
    path: "/about",
  },
];

export default routes;
