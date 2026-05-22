import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { SearchTermInput } from "../../shared/components/search-term-input/search-term-input";
import { usePort } from "../../shared/hooks/use-port";
import { useStorage } from "../../shared/hooks/use-storage";

export function Settings() {
  const { data, loading, error } = useStorage();
  const { postMessage } = usePort();
  const [newTerm, setNewTerm] = useState("");

  function handleDeleteOption(event: React.MouseEvent<HTMLButtonElement>) {
    postMessage("remove-search-term-option", {
      data: { searchTerm: event.currentTarget.value }
    });
  }

  function handleAddOption() {
    const trimmed = newTerm.trim();
    if (!trimmed) return;
    postMessage("add-search-term-option", {
      data: { searchTerm: trimmed }
    });
    setNewTerm("");
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") handleAddOption();
  }

  const options = data?.searchTermOptions ?? [];

  return (
    <Box sx={{ maxWidth: 480, mx: "auto", px: 3, py: 4, width: "100%" }}>
      {/* Page header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1">TailSearch</Typography>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          Configure the search terms that are appended to your text selections.
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error.message}
        </Alert>
      )}

      {/* Active Search Term */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="caption" component="div" sx={{ mb: 1 }}>
          Active Search Term
        </Typography>
        <Paper sx={{ p: 2 }}>
          <SearchTermInput />
        </Paper>
      </Box>

      {/* Search Term Options */}
      <Box>
        <Typography variant="caption" component="div" sx={{ mb: 1 }}>
          Search Term Options
        </Typography>
        <Paper sx={{ p: 0, overflow: "hidden" }}>
          {/* Add new option row */}
          <Box sx={{ display: "flex", gap: 1, p: "12px" }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Add a new search term…"
              value={newTerm}
              onChange={(e) => setNewTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="contained"
              onClick={handleAddOption}
              disabled={!newTerm.trim()}
              startIcon={<AddIcon />}
              sx={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Add
            </Button>
          </Box>

          {loading && (
            <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
              <CircularProgress />
            </Box>
          )}

          {!loading && options.length > 0 && (
            <>
              <Divider />
              <List sx={{ maxHeight: 300, overflowY: "auto" }}>
                {options.map((option) => (
                  <ListItem
                    key={option}
                    secondaryAction={
                      <IconButton
                        size="small"
                        edge="end"
                        aria-label={`Remove ${option}`}
                        onClick={handleDeleteOption}
                        value={option}
                      >
                        <DeleteIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    }
                  >
                    <Typography variant="body1">{option}</Typography>
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {!loading && !error && options.length === 0 && (
            <Box sx={{ px: "12px", pb: "12px" }}>
              <Typography variant="body2" color="text.disabled">
                No options yet. Add one above.
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
