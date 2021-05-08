import useSWR from "swr";

interface Data {
  title: string;
  content: string;
  report: string;
}

const fetcher = (url: string) => {
  return window.fetch(url).then((res) => res.json());
};

export const useEntries = () => {
  const { data, error } = useSWR<Data, Error>(`/api/get-entries`, fetcher, {
    revalidateOnReconnect: true,
  });

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useEntry = (id: string) => {
  return useSWR(`/api/get-entry?id=${id}`, fetcher);
};
