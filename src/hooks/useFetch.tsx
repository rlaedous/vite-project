import { useEffect, useState } from "react";

interface FetchResult {
  loading: boolean;
  data: any; 
  fetchUrl: (type: string) => void;
}

const useFetch = (baseUrl: string, initialType: string): FetchResult => {
  const [data, setData] = useState<any>(null); 
  const [loading, setLoading] = useState(true);

  const fetchUrl = (type: string) => {
    setLoading(true);
    fetch(`${baseUrl}/${type}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchUrl(initialType);
  }, []);

  return {
    loading,
    data,
    fetchUrl,
  };
};

export default useFetch;
