import OutlinedInput from "@mui/material/OutlinedInput"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      transform: "translateY(100%)",
    },
  },
}

const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function QuantitySelect({ quantity, onChange }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 50 }}>
      <Select
        value={quantity}
        onChange={onChange}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Quantity" }}
      >
        {quantities.map((quantity) => (
          <MenuItem key={quantity} value={quantity}>
            {quantity}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
