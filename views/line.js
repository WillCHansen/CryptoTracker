import React from 'react';
import {Line} from 'react-chartjs-2';

import moment from 'moment';

var gdaxDat = [ [ 1500940800, 201, 226.59, 225.97, 207.38, 186091.95353231585 ],
  [ 1500854400, 224, 229.99, 228.27, 225.96, 74988.09549015795 ],
  [ 1500768000, 221.2, 234.35, 230.69, 228.31, 115026.494328923 ],
  [ 1500681600, 215.1, 237.67, 216.58, 230.69, 179552.09818137248 ],
  [ 1500595200, 208.5, 238, 226.23, 216.6, 289918.2595225595 ],
  [ 1500508800, 194.74, 237, 194.74, 226.06, 616444.9872776177 ],
  [ 1500422400, 186.01, 243.9, 227.01, 194.74, 769825.6393279651 ],
  [ 1500336000, 176.51, 249.4, 190.87, 227.01, 871469.857425283 ],
  [ 1500249600, 153.25, 191.5, 155.69, 190.87, 632198.8290636339 ],
  [ 1500163200, 130.26, 172.3, 168.22, 155.68, 609555.7721123858 ],
  [ 1500076800, 167, 198.97, 197.23, 167.72, 261390.37737054424 ],
  [ 1499990400, 183.12, 206.99, 205, 197.23, 213159.60509562414 ],
  [ 1499904000, 193.07, 227, 224.01, 205, 226683.5847230165 ],
  [ 1499817600, 181, 228.88, 190.57, 224.04, 417508.5883225053 ],
  [ 1499731200, 175.56, 216.5, 201.65, 190.57, 529597.0370694393 ],
  [ 1499644800, 185.39, 240.33, 238.4, 202.86, 397429.60007819644 ],
  [ 1499558400, 236, 253.31, 246.65, 238.81, 71494.81765126996 ] ];


  gdaxDat = gdaxDat.sort(function(a,b) {
    return a[0] - b[0];
  });

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     },
//     {
//       label: 'My Second dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(204, 51, 51 ,0.4)',
//       borderColor: 'rgba(204, 51, 51 ,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [55, 39,90, 81, 70, 55, 40]
//     }
//   ]
// };

var transactions = [
    {
        date: '07/10/2017',
        amount: 1.42336192,
        price: 304.47,
        coin: 'ETH'
    },
    {
        date: '07/11/2017',
        amount: 5.25263122,
        price: 1014.9,
        coin: 'ETH'
    },
    {
        date: '07/15/2017',
        amount: 17.30600686,
        price: 3253,
        coin: 'ETH'
    },
    {
        date: '07/18/2017',
        amount: 14.56,
        price: 3021.2,
        coin: 'ETH'
    },
    {
        date: '07/22/2017',
        amount: 7.45,
        price: 1680.27,
        coin: 'ETH'
    },
    {
        date: '07/23/2017',
        amount: 0.09,
        price: 20.16,
        coin: 'ETH'
    }
];

function GenerateVal() {

};

function getAmtDay(day, transactionData) {
  return (
    transactionData.map(function(i) {
      if ( moment(day) >= moment(i.date) ) {
        return i.amount;
      } else return 0
    }).reduce((a, b) => a + b, 0)
  );
};

function getMoneyDay(day, transactionData) {
  return (
    transactionData.map(function(i) {
      if ( moment(day) >= moment(i.date) ) {
        return i.price;
      } else return 0
    }).reduce((a, b) => a + b, 0)
  );
};

function InitialData(labels) {
  this.labels = labels;
  this.datasets = [];
};

function DataSet(label, data, backgroundColor, borderColor) {
  this.backgroundColor = backgroundColor;
  this.label = label;
  this.data = data;
  this.borderColor = borderColor;
};

function chartData() {
  // console.log(getAmtDay('07/11/2017', transactions))
  var dateArr = gdaxDat.map(function(i) {
    return moment(i[0],'X').format('MM/DD/YYYY');
  });
  var priceArr = gdaxDat.map(function(i) {
    return i[4];
  });
  var amtArr = dateArr.map(function(i) {
    return getAmtDay(i, transactions);
  });
  var moneyArr = dateArr.map(function(i) {
    return getMoneyDay(i, transactions);
  });

  for(var i=0; i<=dateArr.length;i++){
    amtArr[i] = amtArr[i] * priceArr[i];
  };

  var dat = new InitialData(dateArr);
  var price = new DataSet("value" , amtArr, 'rgba(75,192,192,0.4)', 'rgba(75,192,192,1)');
  var money = new DataSet("Spent" , moneyArr, 'rgba(204, 51, 51 ,0.4)', 'rgba(204, 51, 51 ,1)');
  dat.datasets.push(price);
  dat.datasets.push(money);
  return dat;
};

export default React.createClass({
  displayName: 'LineExample',

  // chartdata: function() {
  //   var dat = new InitialData(gdaxDat.map(function(i) {
  //     return i[0];
  //   }));
  //   var set = new DataSet(gdaxDat.map(function(i) {
  //     return i[1];
  //   }));
  //   dat.datasets.push(set);
  //   return dat;
  // },

  getDefaultProps() {
    return ({data: chartData()});
  },

  render() {
    console.log(this)
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={this.props.data} />
      </div>
    );
  }
});
