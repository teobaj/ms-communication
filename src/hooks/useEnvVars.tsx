import React, { useEffect, useState } from "react";

interface Env extends ImportMetaEnv {
  VITE_SERVICE_URL: string;
}

export const useEnvVars = () => {
  const [env, setEnv] = useState<Env>();
  useEffect(() => {
    setEnv(import.meta.env as Env);
  }, []);
  return {
    serviceUrl: env?.VITE_SERVICE_URL ?? null,
  };
};
