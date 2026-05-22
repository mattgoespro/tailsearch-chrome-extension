import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { usePort } from "../../hooks/use-port";
import { useStorage } from "../../hooks/use-storage";

export function SearchTermInput() {
  const { data, loading, error } = useStorage();
  const { postMessage } = usePort();

  function onValueChange(_event: React.SyntheticEvent, value: string) {
    postMessage("set-current-search-term-option", {
      data: {
        searchTerm: value
      }
    });
  }

  return (
    <Autocomplete
      fullWidth
      value={data?.currentSearchTermOption ?? null}
      loading={loading}
      loadingText="Loading…"
      options={!loading && !error && data?.searchTermOptions != null ? data.searchTermOptions : []}
      noOptionsText={error != null ? error.message : "No options yet"}
      onChange={onValueChange}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...params}
          color="primary"
          size="small"
          placeholder="Select a search term"
        />
      )}
    />
  );
}
