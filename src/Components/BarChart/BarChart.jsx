import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export default function BarChartData({chartData}) {




  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={[...chartData].reverse()}
        layout="vertical"
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        barCategoryGap="10%"
        barGap={4}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="name" dataKey='count'/>
        <YAxis type="category" dataKey="name"/>
        <Tooltip />
        <Bar dataKey="count" barSize={40} fill="#ff8811" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// "ratings": [
//       { "name": "1 star", "count": 1200 },
//       { "name": "2 star", "count": 1900 },
//       { "name": "3 star", "count": 4700 },
//       { "name": "4 star", "count": 16000 },
//       { "name": "5 star", "count": 67200 }
//     ]