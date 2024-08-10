import qs from "qs";

const parseQueryString = <T>(params: T) => {
  const parseParameters = qs.stringify(
    { ...params },
    {
      filter: (_, value) => value || undefined,
    },
  );

  return parseParameters;
};

export { parseQueryString };
