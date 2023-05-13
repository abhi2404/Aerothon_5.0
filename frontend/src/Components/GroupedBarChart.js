import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ChartContainer = styled.div`
  height: 500px;
`;

const ComparisonBarChart = ({ data }) => {
  const {
    energy_consumption_new_parts,
    energy_consumption_recycled_parts,
    water_usage_new_parts,
    water_usage_recycled_parts,
    carbon_footprint_saved,
    new_parts_carbon_footprint,
    recycled_parts_carbon_footprint,
    landfill_waste_saved,
    landfill_waste_new_parts,
    landfill_waste_recycled_parts,
    toxicity_score_new_parts,
    toxicity_score_recycled_parts,
  } = data;

  const chartData = [
    {
      name: 'Energy Consumption',
      'New Parts': energy_consumption_new_parts,
      'Recycled Parts': energy_consumption_recycled_parts,
    },
    {
      name: 'Water Usage',
      'New Parts': water_usage_new_parts,
      'Recycled Parts': water_usage_recycled_parts,
    },
    {
      name: 'Carbon Footprint',
      'Saved': carbon_footprint_saved,
      'New Parts': new_parts_carbon_footprint,
      'Recycled Parts': recycled_parts_carbon_footprint,
    },
    {
      name: 'Landfill Waste',
      'Saved': landfill_waste_saved,
      'New Parts': landfill_waste_new_parts,
      'Recycled Parts': landfill_waste_recycled_parts,
    },
    {
      name: 'Toxicity Percentage',
      'New Parts': toxicity_score_new_parts * 100,
      'Recycled Parts': toxicity_score_recycled_parts * 100,
    },
  ];

  return (
    <ChartContainer>
      <BarChart width={1200} height={400} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="New Parts" fill="#FFC107" />
        <Bar dataKey="Recycled Parts" fill="#4CAF50" />
        <Bar dataKey="Saved" fill="#9C27B0" />
      </BarChart>
    </ChartContainer>
  );
};

export default ComparisonBarChart;
