

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function (d) {return d.revenue > rev;})
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(d => d.name)
}

// function exactMatch(drivers, attr) {
//   return drivers.filter(function (d) {
//     for (const k in d) {
//       if (Object.keys(attr)[0] === k) {
//         debugger
//         if (d[k] === Object.values(attr)[0]) {
//           return d
//         }
//       }
//     }
//   })
// }

// BETTER
function exactMatch(drivers, attr) {
  return drivers.filter(function (d) {
    let match = false;
    for (const k in attr) {
      match = d[k] === attr[k];
    }
    return match;
  })
}

function exactMatchToList(drivers, attr) {
  return exactMatch(drivers, attr).map(d => d.name)
}
