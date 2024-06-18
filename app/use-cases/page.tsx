'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Card } from "@nextui-org/card";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";

const TryItOut = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [useCase, setUseCase] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSelectChange = (key: string) => {
    setUseCase(key);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          useCase,
          message: 'This is a test call from Belford.ai'
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      setStatus('Call sent successfully!');
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
      <Card style={{ width: "100%", maxWidth: "600px", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
        <h2 style={{ textAlign: "center" }}>Try It Out</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input
            isClearable
            label="Input for Phone Number"
            value={phoneNumber}
            onChange={handleInputChange}
            type="tel"
            required
            fullWidth
          />
          <Dropdown>
            <DropdownTrigger>
              <Input
                isClearable
                label="Choose Use Case"
                value={useCase}
                readOnly
                fullWidth
              />
            </DropdownTrigger>
            <DropdownMenu onAction={handleSelectChange}>
              <DropdownItem key="use-case-1">Use Case 1</DropdownItem>
              <DropdownItem key="use-case-2">Use Case 2</DropdownItem>
              <DropdownItem key="use-case-3">Use Case 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button type="submit" style={{ width: "100%" }} onPress={handleSubmit}>Send Test Call</Button>
        </div>
        {status && <p style={{ marginTop: "16px", textAlign: "center", color: '#fff' }}>{status}</p>}
      </Card>
    </div>
  );
}

export default TryItOut;
