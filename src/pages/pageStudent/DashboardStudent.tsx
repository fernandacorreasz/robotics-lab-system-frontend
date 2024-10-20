import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = {
  hoursSpent: [
    { week: 'Semana 1', hours: 4 },
    { week: 'Semana 2', hours: 7 },
    { week: 'Semana 3', hours: 5 },
    { week: 'Semana 4', hours: 6 }
  ],
  componentsUsed: [
    { type: 'Resistores', quantity: 16 },
    { type: 'Capacitores', quantity: 12 },
    { type: 'LEDs', quantity: 10 },
    { type: 'Sensores', quantity: 7 }
  ],
  timeDistribution: [
    { project: 'Projeto A', percentage: 90 },
    { project: 'Projeto B', percentage: 70 },
    { project: 'Projeto C', percentage: 50 },
    { project: 'Projeto D', percentage: 30 }
  ],
  loansAndReturns: [
    { type: 'Empréstimos', quantity: 8 },
    { type: 'Devoluções', quantity: 5 }
  ]
};

const DashboardStudent: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Gráfico de Horas Gastas em Atividades */}
        <div>
          <h3>Minhas Horas Gastas em Atividades</h3>
          <LineChart width={400} height={300} data={data.hoursSpent}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>

        {/* Gráfico de Componentes Usados */}
        <div>
          <h3>Componentes que Eu Usei em Atividades</h3>
          <BarChart width={400} height={300} data={data.componentsUsed}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {/* Gráfico de Distribuição de Tempo por Projeto */}
        <div>
          <h3>Distribuição do Meu Tempo por Projeto</h3>
          <RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={data.timeDistribution}>
            <PolarGrid />
            <PolarAngleAxis dataKey="project" />
            <PolarRadiusAxis />
            <Radar name="Tempo" dataKey="percentage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>

        {/* Gráfico de Empréstimos vs Devoluções */}
        <div>
          <h3>Componentes que Eu Emprestei e Devolvi</h3>
          <BarChart width={400} height={300} data={data.loansAndReturns}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
