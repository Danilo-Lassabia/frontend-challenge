import { Pie, G2 } from "@ant-design/plots";
import React from "react";

export function PieChart({ data }) {
  const filmsOfCharacter = data.data.films.length;
  const films = 6 - filmsOfCharacter;
  console.log(filmsOfCharacter);
  const DemoPie = () => {
    const G = G2.getEngine("canvas");
    const data = [
      {
        type: "Aparece",
        value: filmsOfCharacter,
      },
      {
        type: "Não Aparece",
        value: films,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: "value",
      colorField: "type",
      radius: 0.9,
      label: {
        type: "inner",
        offset: "-30%",
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: "center",
        },
      },
    };
    const cfg = config;
    return <Pie {...cfg} />;
  };
  return <DemoPie />;
}