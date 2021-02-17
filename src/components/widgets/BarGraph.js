import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

const BarGraph = (props) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const calcHeight = () => {
    return matchesMD ? 300 : matchesSM ? 150 : 400;
  }

  const calcWidth = () => {
    return matchesMD ? 500 : matchesSM ? 300 : 900;
  }

  const data = props.data;
  const [xData, yData] = Object.entries(data[0]);

  return (
    <Paper>
      <BarChart width={calcWidth()} height={calcHeight()} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xData[0]} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={yData[0]} fill="#ffa500" />
      </BarChart>
    </Paper>
  );
}

export default BarGraph;