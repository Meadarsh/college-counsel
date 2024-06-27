export const InputStyle = {
    width: "100%",
    height: "100%",
    "& .MuiOutlinedInput-root": {
      padding: 1.2,
      "& fieldset": {
        padding: 1,
      },
      "& .MuiInputBase-input": {
        padding: "0 14px", // Add horizontal padding to keep the label centered properly
      },
    },
    "& .MuiInputLabel-root": {
      transform: "translate(14px, 12px) scale(1)", // Center the label when focused
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)", // Center the label when shrunk
    },
  }
