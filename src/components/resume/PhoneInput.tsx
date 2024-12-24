import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const countryCodes = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+61", country: "AU" },
  { code: "+86", country: "CN" },
  { code: "+81", country: "JP" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
];

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const [countryCode, setCountryCode] = React.useState("+1");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    // Extract country code and number from value if it exists
    if (value) {
      const code = countryCodes.find(c => value.startsWith(c.code));
      if (code) {
        setCountryCode(code.code);
        setPhoneNumber(value.slice(code.code.length));
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = e.target.value;
    setPhoneNumber(newNumber);
    onChange(`${countryCode}${newNumber}`);
  };

  const handleCountryCodeChange = (newCode: string) => {
    setCountryCode(newCode);
    onChange(`${newCode}${phoneNumber}`);
  };

  return (
    <div className="flex gap-2">
      <Select value={countryCode} onValueChange={handleCountryCodeChange}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Code" />
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.code} {country.country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="flex-1"
      />
    </div>
  );
};

export default PhoneInput;