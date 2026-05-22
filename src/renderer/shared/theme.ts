import { createTheme } from "@mui/material";
import MuiCreateStyled from "@mui/system/createStyled";

export const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#0F0F11",
      white: "#FAFAFA"
    },
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FAFAFA"
    },
    secondary: {
      main: "#A78BFA",
      light: "#C4B5FD",
      dark: "#7C3AED",
      contrastText: "#FAFAFA"
    },
    error: {
      main: "#EF4444",
      light: "#FCA5A5",
      dark: "#DC2626",
      contrastText: "#FAFAFA"
    },
    warning: {
      main: "#F59E0B",
      light: "#FCD34D",
      dark: "#D97706",
      contrastText: "#FAFAFA"
    },
    info: {
      main: "#38BDF8",
      light: "#7DD3FC",
      dark: "#0284C7",
      contrastText: "#FAFAFA"
    },
    success: {
      main: "#22C55E",
      light: "#86EFAC",
      dark: "#16A34A",
      contrastText: "#FAFAFA"
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#A1A1AA",
      disabled: "#52525B"
    },
    background: {
      default: "#0F0F11",
      paper: "#18181B"
    },
    divider: "#27272A"
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    fontSize: 14,
    h1: {
      fontFamily: "Inter, sans-serif",
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#FAFAFA",
      lineHeight: 1.3
    },
    h2: {
      fontFamily: "Inter, sans-serif",
      fontSize: "1.0625rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#FAFAFA",
      lineHeight: 1.3
    },
    h3: {
      fontFamily: "Inter, sans-serif",
      fontSize: "0.9375rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "#FAFAFA",
      lineHeight: 1.3
    },
    button: {
      fontFamily: "Inter, Nunito Sans, sans-serif",
      fontSize: "0.8125rem",
      fontWeight: 500,
      textTransform: "none"
    },
    body1: {
      fontFamily: "Inter, Roboto, sans-serif",
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#FAFAFA"
    },
    body2: {
      fontFamily: "Inter, Roboto, sans-serif",
      fontSize: "0.8125rem",
      fontWeight: 400,
      color: "#A1A1AA"
    },
    caption: {
      fontFamily: "Inter, Roboto, sans-serif",
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "#71717A"
    },
    overline: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#A1A1AA"
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: "#18181B",
          backgroundImage: "none",
          border: "1px solid #27272A",
          borderRadius: "8px",
          boxSizing: "border-box"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.8125rem",
          lineHeight: 1.5
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#6366F1",
            color: "#FAFAFA",
            padding: "5px 14px",
            "&:hover": {
              backgroundColor: "#4F46E5",
              boxShadow: "0 0 0 3px rgba(99,102,241,0.25)"
            },
            "&:focus-visible": {
              boxShadow: "0 0 0 3px rgba(99,102,241,0.4)"
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(99,102,241,0.3)",
              color: "rgba(250,250,250,0.4)"
            }
          }
        }
      ]
    },
    MuiAutocomplete: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        paper: {
          backgroundColor: "#1C1C1F",
          border: "1px solid #3F3F46",
          borderRadius: "6px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
        },
        listbox: {
          padding: "4px",
          "& .MuiAutocomplete-option": {
            borderRadius: "4px",
            fontSize: "0.875rem",
            minHeight: "auto",
            padding: "6px 8px",
            '&[aria-selected="true"]': {
              backgroundColor: "rgba(99,102,241,0.15)"
            },
            "&.Mui-focused": {
              backgroundColor: "rgba(99,102,241,0.1)"
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          backgroundColor: "#111114",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3F3F46"
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6366F1"
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6366F1",
            borderWidth: "1.5px"
          }
        },
        input: {
          fontSize: "0.875rem",
          color: "#FAFAFA",
          padding: "6px 10px"
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined"
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "6px 10px",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.04)"
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          transition: "background-color 0.15s",
          "&:hover": {
            backgroundColor: "rgba(99,102,241,0.12)"
          }
        },
        sizeSmall: {
          padding: "4px"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#27272A"
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
        color: "primary"
      },
      styleOverrides: {
        root: {
          color: "#818CF8",
          fontWeight: 500,
          fontSize: "0.8125rem",
          cursor: "pointer",
          "&:hover": {
            color: "#A5B4FC"
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontSize: "0.8125rem"
        },
        standardError: {
          backgroundColor: "rgba(239,68,68,0.08)",
          color: "#FCA5A5",
          border: "1px solid rgba(239,68,68,0.2)"
        }
      }
    },
    MuiCircularProgress: {
      defaultProps: {
        size: 20,
        color: "primary"
      }
    }
  }
});

export const createStyled = MuiCreateStyled({
  defaultTheme: theme
});
