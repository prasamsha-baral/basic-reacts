import { type RouteConfig,route, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("counter","routes/counter.tsx"),
    route("calculator","routes/calculator.tsx"),
    route("todo","routes/List.tsx"),
    route("front","routes/front.tsx")
] satisfies RouteConfig;


