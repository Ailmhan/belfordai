'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Card } from "@nextui-org/card";

const TryItOut = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
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
          message: 'This is a test call from Bland.ai'
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ maxWidth: "400px", padding: "24px" }}>
        <h1>Try It Out</h1>
        <form onSubmit={handleSubmit}>
          <Input
            isClearable
            label="Phone Number"
            value={phoneNumber}
            onChange={handleInputChange}
            type="tel"
            required
            fullWidth
          />
          <Button type="submit" style={{ marginTop: "16px" }}>Send Test Call</Button>
        </form>
        {status && <p style={{ marginTop: "16px" }}>{status}</p>}
      </Card>
    </div>
  );
}

export default TryItOut;
