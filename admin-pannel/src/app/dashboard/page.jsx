"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const options = [
  { title: "Option 1", image: "https://via.placeholder.com/50" },
  { title: "Option 2", image: "https://via.placeholder.com/50" },
  { title: "Option 3", image: "https://via.placeholder.com/50" },
  // Add more options here
];

const AutocompleteWithTags = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.title}
      value={selectedOptions}
      onChange={(event, newValue) => {
        setSelectedOptions(newValue);
      }}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option.title}
            {...getTagProps({ index })}
            onDelete={() => {
              const newOptions = selectedOptions.filter(
                (selected) => selected.title !== option.title
              );
              setSelectedOptions(newOptions);
            }}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Start typing..."
        />
      )}
      style={{ width: 400, margin: "0 auto" }}
    />
  );
};

export default AutocompleteWithTags;
