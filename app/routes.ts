import { type RouteConfig,route, index } from "@react-router/dev/routes";

export default [index("routes/front.tsx"),
    route("counter","routes/counter.tsx"),
    route("calculator","routes/calculator.tsx"),
    route("todo","routes/List.tsx"),
    route("about","routes/Home.tsx")
] satisfies RouteConfig;


