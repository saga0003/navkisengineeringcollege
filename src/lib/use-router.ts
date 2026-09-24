"use client";

import { useEffect, useState, useCallback } from "react";
import type { RouteId } from "./site-data";

export interface Route {
  page: RouteId;
  param?: string; // e.g. department slug
}

function parseHash(): Route {
  if (typeof window === "undefined") return { page: "home" };
  const h = window.location.hash.replace(/^#\/?/, "");
  if (!h) return { page: "home" };
  const [page, param] = h.split("/");
  return { page: (page as RouteId) || "home", param: param ? decodeURIComponent(param) : undefined };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>({ page: "home" });

  useEffect(() => {
    // Sync state with the URL hash on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRoute(parseHash());
    const onHashChange = () => {
      setRoute(parseHash());
      // Scroll to top on every route change
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((page: RouteId, param?: string) => {
    const hash = param ? `#/${page}/${param}` : `#/${page}`;
    if (window.location.hash === hash) {
      // already there — just scroll up
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = hash;
    }
  }, []);

  return { route, navigate };
}

// Context for sharing navigate function across components
import { createContext, useContext } from "react";

export interface RouterContextValue {
  route: Route;
  navigate: (page: RouteId, param?: string) => void;
}

export const RouterContext = createContext<RouterContextValue>({
  route: { page: "home" },
  navigate: () => {},
});

export function useNav() {
  return useContext(RouterContext);
}
