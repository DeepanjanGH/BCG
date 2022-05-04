import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";

const PolicyGraph = () => {
  const { policyDataList } = useSelector((state) => ({
    policyDataList: state.policyDataReducer.policyDataList,
  }));

  const [seriesArray, setseriesArray] = useState([]);

  const getNoOfPolicyPerMonth = (data) => {
    let arr = new Array(12).fill(0);

    data.forEach((item) => {
      let month = new Date(item["Date of Purchase"]).getMonth();
      arr[month] = arr[month] + 1;
    });

    return arr;
  };

  useEffect(() => {
    if (policyDataList) {
      setseriesArray(getNoOfPolicyPerMonth(policyDataList));
    }
  }, [policyDataList]);

  const chartOptions = {
    title: {
      text: "Policies bought every month",
    },
    chart: {
      type: "line",
      height: 450,
    },
    legend: {
      margin: 5,
      itemDistance: 10,
      enabled: false,
    },
    xAxis: {
      visible: true,
      type: "datetime",
    },
    yAxis: {
      stackLabels: {
        enabled: false,
        align: "center",
      },
      visible: true,
      title: { enabled: false, text: "Count" },
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        pointStart: Date.UTC(2018, 0, 1),
        pointIntervalUnit: "month",
        data: seriesArray,
        color: "#177b57",
      },
    ],
  };

  return (
    <Card className='policy-graph-container'>
      <Card.Body>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Card.Body>
    </Card>
  );
};

export default PolicyGraph;
