import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';

const average = (data, units) => {
  let avg = _.round(_.sum(data)/data.length);
  return <p>Average: {avg} {units}</p>;
};

const Chart = ({ data, color, units }) => {
  return (
    <div>
      <Sparklines data={data} width={180} height={130}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='avg' />
        <SparklinesSpots />
      </Sparklines>
      <div  style={{ textAlign: 'center' }}>{average(data,units)}</div>
    </div>
  );
};

export default Chart;
