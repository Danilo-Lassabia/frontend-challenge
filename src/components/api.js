import axios from "axios";
import PropTypes from "prop-types";
import { memo } from "react";
import { useQuery } from "react-query";

export const API = memo(({ url, field }) => {
    const { data, isFetching } = useQuery(
    ["queryFetch", url],
    () => axios.get(url).then((result) => result.data),
    { refetchOnWindowFocus: false }
  );

  if (isFetching) return "LOADING";

  return data[field] || "";
});

API.propTypes = {
    url: PropTypes.string,
    field: PropTypes.string,
  };


