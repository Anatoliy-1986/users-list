import { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export function useRouter() {
  const params = useParams();
  const location = useLocation();

  return useMemo(() => {
    return {
      pathname: location.pathname,
      location,
      history,
    };
  }, [params, location, history]);
}
