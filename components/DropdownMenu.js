"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full max-w-xs mb-5">
      <nav>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="block w-full py-0.5 bg-black border border-black rounded-md text-sm font-semibold">
        <option value="">Язык</option>
        <option value="option1">Русский</option>
        <option value="option2">Казахский</option>
      </select>
      </nav>
    </div>
  );
};

export default DropdownMenu;