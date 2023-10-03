import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Autocomplete, CardHeader, Chip, Collapse, IconButton, TextField } from "@mui/material";
import { useState } from "react";

export const ComponentSearchBrand = () => {
  const brands:string[] = [];
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CardHeader
        title="Brand"
        action={
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label="expand"
            size="small"
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        }
      ></CardHeader>
      <div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="flex flex-col gap-3 w-full p-2">
            <Autocomplete
              options={brands}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              freeSolo
              renderInput={(params) => {
                console.log(params);
                return (
                  <TextField
                    {...params}
                    placeholder="Search Brand"
                    onKeyDown={(e) => {
                      const value: string = (e.target as HTMLInputElement)
                        .value;
                      if (e.key == "Enter" && value.length > 0) {
                        console.log(value);
                        setSelectedBrand(
                          Array.from(new Set([...selectedBrand, value]))
                        );
                        (e.target as HTMLInputElement).value = "";
                      }
                    }}
                  />
                );
              }}
            />
            <div className="flex justify-end">
              {selectedBrand.length > 0 && (
                <Chip label="Clear All" onDelete={() => setSelectedBrand([])} />
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedBrand.map((value) => (
                <Chip
                  label={value}
                  key={value}
                  onDelete={() =>
                    setSelectedBrand([
                      ...selectedBrand.filter(
                        (currBrand) => currBrand !== value
                      ),
                    ])
                  }
                />
              ))}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
