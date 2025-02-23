import React, { useState } from "react";
import { Box, InputBase } from "@mui/material";

export default function PinCode() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Limit to 1 character
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <Box display="flex" justifyContent="start" gap={1} pb={3}>
      {otp.map((digit, index) => (
        <InputBase
          key={index}
          id={`otp-input-${index}`}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: "center", fontSize: "1.5rem" },
          }}
          sx={{
            width: "50px",
            height: "50px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "start",
            fontSize: "1.5rem",
            "&:focus": {
              borderColor: "blue",
            },
          }}
        />
      ))}
    </Box>
  );
}
