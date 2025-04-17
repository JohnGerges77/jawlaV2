"use client";
import React, { useState, useEffect } from "react";
import HomeCard from "./_DashboardComponents/HomeCard";
import {
  GetAvaliableTrips,
  GetSales,
  GetTripsBookings,
  GetUsersNumber,
  GetLocations,
  GetTotalEarningsGrouped,
} from "./DashboardApis/StatisticsApi";
import PieChart from "./_DashboardComponents/PieChart";
import AreaChart from "./_DashboardComponents/AreaChart";

function Page() {
  const [usersNumber, setUsersNumber] = useState(null);
  const [availableTrips, setAvailableTrips] = useState(null);
  const [tripsBookings, setTripsBookings] = useState(null);
  const [sales, setSales] = useState(null);
  const [locationsData, setLocationsData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [day, setDay] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await GetUsersNumber(day);
      setUsersNumber(usersData?.count);

      const tripsData = await GetAvaliableTrips(day);
      setAvailableTrips(tripsData?.count);

      const bookingsData = await GetTripsBookings(day);
      setTripsBookings(bookingsData?.count);

      const SalesData = await GetSales(day);
      setSales(SalesData?.earnings);

      const locations = await GetLocations(day);
      setLocationsData(locations || []);

      try {
                const salesGroupedData = await GetTotalEarningsGrouped(day);
                setSalesData(salesGroupedData || []);
                console.log('locations:' +salesGroupedData);
              } catch (error) {
                console.error("Error fetching total earnings grouped:", error.message);
                setSalesData([]);
              }
            

      const fakeSalesData = [
        { date: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1200 },
        { date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1500 },
        { date: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString(), earnings: 800 },
        { date: new Date(Date.now() - 26 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2000 },
        { date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1700 },
        { date: new Date(Date.now() - 24 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1300 },
        { date: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2200 },
        { date: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1900 },
        { date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2500 },
        { date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), earnings: 3000 },
        { date: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2700 },
        { date: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2300 },
        { date: new Date(Date.now() - 17 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1800 },
        { date: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2100 },
        { date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2600 },
        { date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2900 },
        { date: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2400 },
        { date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2000 },
        { date: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(), earnings: 1700 },
        { date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2200 },
        { date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2500 },
        { date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2800 },
        { date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), earnings: 3100 },
        { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), earnings: 3400 },
        { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), earnings: 3600 },
        { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), earnings: 3200 },
        { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2900 },
        { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), earnings: 2700 },
        { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), earnings: 3000 },
        { date: new Date(Date.now()).toISOString(), earnings: 3500 },
      ];
      setSalesData(fakeSalesData);
    };

    fetchData();
  }, [day]);

  return (
    <>
      <div className="flex justify-end mb-4">
        <div className="bg-[#192335] p-1 space-x-1 rounded-lg flex">
          {[
            { label: "1 Day", value: 1 },
            { label: "7 Days", value: 7 },
            { label: "30 Days", value: 30 },
            { label: "90 Days", value: 90 },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setDay(option.value)}
              className={`px-3 py-1 rounded transition duration-500 ${
                day === option.value
                  ? "bg-blue-700 text-white"
                  : "text-gray-300 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4">
        <HomeCard data={usersNumber} title="Total Users" time={day} />
        <HomeCard data={sales} title="Sales" time={day} />
        <HomeCard data={availableTrips} title="Active Trips" time={day} />
        <HomeCard data={tripsBookings} title="Trips Bookings" time={day} />
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-[66%]">
          <AreaChart salesData={salesData} />
        </div>
        <div className="w-[31%]">
          <PieChart locationsData={locationsData} />
        </div>
      </div>
    </>
  );
}

export default Page;
















// "use client";
// import React, { useState, useEffect } from "react";
// import HomeCard from "./_DashboardComponents/HomeCard";
// import { GetAvaliableTrips, GetSales, GetTripsBookings, GetUsersNumber, GetLocations, GetTotalEarningsGrouped } from "./DashboardApis/StatisticsApi";
// import { Doughnut, Line } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, Filler } from "chart.js";
// import Spinner from "../_components/Spinner";

// ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, Filler);

// function Page() {
//   const [usersNumber, setUsersNumber] = useState(null);
//   const [availableTrips, setAvailableTrips] = useState(null);
//   const [tripsBookings, setTripsBookings] = useState(null); // Fixed typo in import
//   const [sales, setSales] = useState(null);
//   const [locationsData, setLocationsData] = useState([]);
//   const [salesData, setSalesData] = useState([]);
//   const [day, setDay] = useState(30);

//   useEffect(() => {
//     const fetchData = async () => {
//       const usersData = await GetUsersNumber(day);
//       setUsersNumber(usersData?.count);

//       const tripsData = await GetAvaliableTrips(day);
//       setAvailableTrips(tripsData?.count);

//       const bookingsData = await GetTripsBookings(day);
//       setTripsBookings(bookingsData?.count);

//       const SalesData = await GetSales(day);
//       setSales(SalesData?.earnings);

//       const locations = await GetLocations(day);
//       setLocationsData(locations || []);


   
//       try {
//         const salesGroupedData = await GetTotalEarningsGrouped(day);
//         setSalesData(salesGroupedData || []);
//         console.log('locations:' +salesGroupedData);
//       } catch (error) {
//         console.error("Error fetching total earnings grouped:", error.message);
//         setSalesData([]);
//       }
//     };

//     fetchData();
//   }, [day]);

//   const sortedLocations = [...locationsData].sort((a, b) => b.count - a.count);
//   const topSevenLocations = sortedLocations.slice(0, 7);

//   const labels = topSevenLocations.map((item) => item.location);
//   const counts = topSevenLocations.map((item) => item.count);

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Travelers",
//         data: counts,
//         backgroundColor: [
//           "#b91c1c",
//           "#1d4ed8",
//           "#7e22ce",
//           "#14b8a6",
//           "#a16207",
//           "#4d7c0f",
//           "#0f766e",
//         ],
//         hoverOffset: 4,
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         position: "right",
//         labels: {
//           font: {
//             size: 14,
//           },
//           color: "#ffffff",
//         },
//       },
//     },
//     cutout: "70%",
//   };

//   const salesLabels = salesData.map((item) => {
//     const date = new Date(item.data);
//     return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
//   });

//   const salesValues = salesData.map((item) => item.earnings);

//   const salesChartData = {
//     labels: salesLabels,
//     datasets: [
//       {
//         label: "Sales",
//         data: salesValues,
//         fill: true,
//         backgroundColor: "rgba(29, 78, 216, 0.5)",
//         borderColor: "rgba(29, 78, 216, 1)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const salesChartOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#ffffff",
//         },
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         ticks: {
//           color: "#ffffff",
//           stepSize: 3000,
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.1)",
//         },
//       },
//     },
//   };

//   return (
//     <>
//       <div className="flex justify-end mb-4">
//         <div className="bg-[#192335] p-1 space-x-1 rounded-lg flex">
//           {[
//             { label: "1 Day", value: 1 },
//             { label: "7 Days", value: 7 },
//             { label: "30 Days", value: 30 },
//             { label: "90 Days", value: 90 },
//           ].map((option) => (
//             <button
//               key={option.value}
//               onClick={() => setDay(option.value)}
//               className={`px-3 py-1 rounded transition duration-500 ${
//                 day === option.value
//                   ? "bg-blue-700 text-white"
//                   : "text-gray-300 hover:bg-blue-700 hover:text-white"
//               }`}
//             >
//               {option.label}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-4 px-4">
//         <HomeCard data={usersNumber} title="Total Users" time={day} />
//         <HomeCard data={sales} title="Sales" time={day} />
//         <HomeCard data={availableTrips} title="Active Trips" time={day} />
//         <HomeCard data={tripsBookings} title="Trips Bookings" time={day} />
//       </div>
//       <div className="flex justify-between mt-8">

//       <div className="text-white w-[65%]">
//           <div className="bg-gradient-to-br from-[#0c1f47] to-[#161132] text-white px-5 pt-1 rounded-2xl shadow-2xl shadow-black/60">
//             <h3 className="text-2xl font-semibold text-secondary mt-2 ml-2">
//               Sales from {salesLabels[0] || "Start"} - {salesLabels[salesLabels.length - 1] || "End"}
//             </h3>
//             <div className="w-[550px] h-[350px]">
//               {salesData.length > -1 ? (
//                 <Line data={salesChartData} options={salesChartOptions} />
//               ) : (
//                 <Spinner />
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="text-white w-[31%]">
//           <div className="bg-gradient-to-br from-[#0c1f47] to-[#161132] text-white px-5 pt-1 rounded-2xl shadow-2xl shadow-black/60">
//             <h3 className="text-2xl font-semibold text-secondary mt-2 ml-2">Top Locations</h3>
//             <div className="w-[350px] h-[350px]">
//               {locationsData.length > 0 ? (
//                 <Doughnut data={chartData} options={options} />
//               ) : (
//                 <Spinner />
//               )}
//             </div>
//           </div>
//         </div>

    
//       </div>
//     </>
//   );
// }

// export default Page;