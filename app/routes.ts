import { type RouteConfig,route, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("counter","routes/counter.tsx"),
    route("calculator","routes/calculator.tsx"),
    route("todo","routes/List.tsx")
] satisfies RouteConfig;


// export default [index("routes/login.jsx"),
//     route("about","routes/about.jsx"),
//     route("home","routes/home.jsx")
// ] satisfies RouteConfig;
