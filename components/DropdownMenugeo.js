"use client";

import React, { useState } from 'react';

const DropdownMenugeo = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full py-3">
      <nav>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="block w-full bg- border border- rounded-full text-sm font-semibold py-2 ">
        <option value="">Выберите город</option>
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

export default DropdownMenugeo;