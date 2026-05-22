import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { SearchTermInput } from "../../shared/components/search-term-input/search-term-input";

export function ActionPopup() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", gap: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: "8px",
            backgroundColor: "rgba(99,102,241,0.12)",
            color: "primary.light",
            flexShrink: 0
          }}
        >
          <SearchIcon sx={{ fontSize: 18 }} />
        </Box>
        <Box>
          <Typography variant="h2" sx={{ lineHeight: 1.2 }}>
            TailSearch
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
            Append terms to your searches
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* Search term selector */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="caption" component="div" sx={{ mb: 1 }}>
          Active Search Term
        </Typography>
        <Paper sx={{ p: 1.5 }}>
          <SearchTermInput />
        </Paper>
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: "center" }}>
        <Link href="/options.html" target="_blank">
          Manage options in Settings
        </Link>
      </Box>
    </Box>
  );
}
