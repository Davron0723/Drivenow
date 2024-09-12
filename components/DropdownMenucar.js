"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const DropdownMenucar = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full">
      <nav>
      <select value={selectedOption} onChange={handleChange} className="block w-full bg-[#31313180] border border-[#31313180] rounded-md text-sm font-semibold pr-80 py-2">
        <option value=""><Image src='/cardrop.png' alt='' width='20' height='20'/>Выберите город</option>
        <option value="option1">Любой</option>
        <option value="option2">Алматы</option>
        <option value="option3">Астана</option>
        <option value="option4">Атырау</option>
        <option value="option5">Шымкент</option>
      </select>
      </nav>
    </div>
  );
};

export default DropdownMenucar;