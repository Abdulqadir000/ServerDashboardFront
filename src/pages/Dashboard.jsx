// import React from "react";
// import {
//     Activity,
//     Users,
//     Box,
//     Download,
//     Upload,
//     Monitor,
//     RefreshCw,
//     Maximize,
//     Edit,
// } from "lucide-react";

// const DashboardCard = ({ title, value, icon, color }) => {
//     const bgColor = `bg-${color}-100`;
//     const textColor = `text-${color}-600`;

//     return (
//         <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-t-blue-500 hover:shadow-md transition-all">
//             <div
//                 className={`${bgColor} ${textColor} w-12 h-12 flex items-center justify-center rounded-lg mb-4`}
//             >
//                 {icon}
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
//             <div className="text-xs uppercase tracking-wider text-gray-600 font-medium">
//                 {title}
//             </div>
//         </div>
//     );
// };

// const ServerCard = ({ server }) => {
//     const { name, ip, uptime, metrics } = server;

//     const getProgressColor = (value) => {
//         if (value < 30) return "bg-green-500";
//         if (value < 70) return "bg-yellow-500";
//         return "bg-red-500";
//     };

//     return (
//         <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
//             <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
//                 <div>
//                     <div className="font-semibold">{name}</div>
//                     <div className="text-sm text-gray-300">{ip}</div>
//                 </div>
//                 <div className="text-xs px-2 py-1 rounded">{uptime}</div>
//                 <div className="flex space-x-2">
//                     <button className="opacity-70 hover:opacity-100 transition-opacity">
//                         <Edit size={16} />
//                     </button>
//                     <button className="opacity-70 hover:opacity-100 transition-opacity">
//                         <Maximize size={16} />
//                     </button>
//                 </div>
//             </div>

//             <div className="p-4">
//                 <div className="grid grid-cols-2 gap-4">
//                     {Object.entries(metrics).map(([key, value]) => (
//                         <div key={key} className="mb-3">
//                             <div className="flex justify-between items-center mb-1">
//                                 <span className="text-xs text-gray-600">
//                                     {key}
//                                 </span>
//                                 <span className="text-sm font-semibold bg-gray-100 px-2 rounded">
//                                     {value.value}
//                                 </span>
//                             </div>
//                             <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                                 <div
//                                     className={`h-full rounded-full ${getProgressColor(
//                                         value.percentage
//                                     )}`}
//                                     style={{ width: `${value.percentage}%` }}
//                                 ></div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Dashboard = () => {
//     // Sample data
//     const stats = [
//         {
//             title: "Online Users",
//             value: "12",
//             icon: <Users size={24} />,
//             color: "blue",
//         },
//         {
//             title: "Open Connections",
//             value: "23,845",
//             icon: <Box size={24} />,
//             color: "green",
//         },
//         {
//             title: "Total Input (Mbps)",
//             value: "6,754",
//             icon: <Download size={24} />,
//             color: "pink",
//         },
//         {
//             title: "Online Streams",
//             value: "1,561",
//             icon: <Activity size={24} />,
//             color: "purple",
//         },
//     ];

//     const servers = [
//         {
//             name: "Main Server",
//             ip: "15.235.87.59",
//             uptime: "12h 20m",
//             metrics: {
//                 Connections: { value: "0", percentage: 0 },
//                 Users: { value: "0", percentage: 0 },
//                 "Streams Live": { value: "0", percentage: 0 },
//                 "Streams Off": { value: "0", percentage: 0 },
//                 Input: { value: "0", percentage: 0 },
//                 Output: { value: "1", percentage: 5 },
//                 CPU: { value: "5%", percentage: 5 },
//                 RAM: { value: "5%", percentage: 5 },
//             },
//         },
//         {
//             name: "Server Name 1",
//             ip: "212.102.60.213",
//             uptime: "12h 16m",
//             metrics: {
//                 Connections: { value: "8828", percentage: 45 },
//                 Users: { value: "3", percentage: 15 },
//                 "Streams Live": { value: "504", percentage: 25 },
//                 "Streams Off": { value: "27", percentage: 10 },
//                 Input: { value: "3093", percentage: 30 },
//                 Output: { value: "6070", percentage: 60 },
//                 CPU: { value: "25%", percentage: 25 },
//                 RAM: { value: "34%", percentage: 34 },
//             },
//         },
//         {
//             name: "Server Name 2",
//             ip: "195.181.163.155",
//             uptime: "41d 7h",
//             metrics: {
//                 Connections: { value: "378", percentage: 20 },
//                 Users: { value: "2", percentage: 10 },
//                 "Streams Live": { value: "47", percentage: 15 },
//                 "Streams Off": { value: "0", percentage: 0 },
//                 Input: { value: "0", percentage: 0 },
//                 Output: { value: "0", percentage: 0 },
//                 CPU: { value: "8%", percentage: 8 },
//                 RAM: { value: "15%", percentage: 15 },
//             },
//         },
//         {
//             name: "Server Name 3",
//             ip: "212.102.60.216",
//             uptime: "12d 19h",
//             metrics: {
//                 Connections: { value: "368", percentage: 18 },
//                 Users: { value: "4", percentage: 20 },
//                 "Streams Live": { value: "269", percentage: 27 },
//                 "Streams Off": { value: "23", percentage: 12 },
//                 Input: { value: "0", percentage: 0 },
//                 Output: { value: "0", percentage: 0 },
//                 CPU: { value: "12%", percentage: 12 },
//                 RAM: { value: "28%", percentage: 28 },
//             },
//         },
//         {
//             name: "Server Name 4",
//             ip: "195.181.163.21",
//             uptime: "41d 13h",
//             metrics: {
//                 Connections: { value: "705", percentage: 35 },
//                 Users: { value: "10", percentage: 50 },
//                 "Streams Live": { value: "324", percentage: 40 },
//                 "Streams Off": { value: "71", percentage: 30 },
//                 Input: { value: "1186", percentage: 20 },
//                 Output: { value: "3251", percentage: 45 },
//                 CPU: { value: "45%", percentage: 45 },
//                 RAM: { value: "53%", percentage: 53 },
//             },
//         },
//         {
//             name: "Server Name 5",
//             ip: "121.127.41.143",
//             uptime: "231d 1h",
//             metrics: {
//                 Connections: { value: "13486", percentage: 70 },
//                 Users: { value: "3", percentage: 15 },
//                 "Streams Live": { value: "417", percentage: 25 },
//                 "Streams Off": { value: "25", percentage: 12 },
//                 Input: { value: "2485", percentage: 35 },
//                 Output: { value: "6135", percentage: 65 },
//                 CPU: { value: "67%", percentage: 67 },
//                 RAM: { value: "71%", percentage: 71 },
//             },
//         },
//         {
//             name: "Server Name 6",
//             ip: "10.100.100.100",
//             uptime: "0d 0h",
//             metrics: {
//                 Connections: { value: "0", percentage: 0 },
//                 Users: { value: "0", percentage: 0 },
//                 "Streams Live": { value: "0", percentage: 0 },
//                 "Streams Off": { value: "0", percentage: 0 },
//                 Input: { value: "0", percentage: 0 },
//                 Output: { value: "0", percentage: 0 },
//                 CPU: { value: "0%", percentage: 0 },
//                 RAM: { value: "0%", percentage: 0 },
//             },
//         },
//     ];

//     return (
//         <div className="bg-gray-50 min-h-screen p-6">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex justify-between items-center mb-8">
//                     <h1 className="text-2xl font-bold text-gray-900">
//                         Server Monitoring Dashboard
//                     </h1>
//                     <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
//                         <RefreshCw size={16} />
//                         Refresh
//                     </button>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     {stats.map((stat, index) => (
//                         <DashboardCard
//                             key={index}
//                             title={stat.title}
//                             value={stat.value}
//                             icon={stat.icon}
//                             color={stat.color}
//                         />
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {servers.map((server, index) => (
//                         <ServerCard key={index} server={server} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import React from "react";
import {
    Activity,
    Users,
    Box,
    Download,
    Upload,
    Monitor,
    RefreshCw,
    Maximize,
    Edit,
    Wifi,
    WifiOff,
    Circle,
    CircleOff,
} from "lucide-react";

const DashboardCard = ({ title, value, icon, color }) => {
    const bgColor = `bg-${color}-100`;
    const textColor = `text-${color}-600`;

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-t-blue-500 hover:shadow-md transition-all">
            <div
                className={`${bgColor} ${textColor} w-12 h-12 flex items-center justify-center rounded-lg mb-4`}
            >
                {icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
            <div className="text-xs uppercase tracking-wider text-gray-600 font-medium">
                {title}
            </div>
        </div>
    );
};

const ServerCard = ({ server }) => {
    const { name, ip, uptime, metrics, status } = server;

    const getProgressColor = (value) => {
        if (value < 30) return "bg-green-500";
        if (value < 70) return "bg-yellow-500";
        return "bg-red-500";
    };

    const getStatusColor = () => {
        return status === "online" ? "bg-green-500" : "bg-red-500";
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div
                        className={`w-2 h-2 rounded-full ${getStatusColor()}`}
                    ></div>
                    <div>
                        <div className="font-semibold">{name}</div>
                        <div className="text-sm text-gray-300">{ip}</div>
                    </div>
                </div>
                <div className="text-xs px-2 py-1 rounded">{uptime}</div>
                <div className="flex space-x-2">
                    <button className="opacity-70 hover:opacity-100 transition-opacity">
                        <Edit size={16} />
                    </button>
                    <button className="opacity-70 hover:opacity-100 transition-opacity">
                        <Maximize size={16} />
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(metrics).map(([key, value]) => (
                        <div key={key} className="mb-3">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-gray-600">
                                    {key}
                                </span>
                                <span className="text-sm font-semibold bg-gray-100 px-2 rounded">
                                    {value.value}
                                </span>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${getProgressColor(
                                        value.percentage
                                    )}`}
                                    style={{ width: `${value.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Dashboard = () => {
    // Sample data
    const stats = [
        {
            title: "Online Users",
            value: "12",
            icon: <Users size={24} />,
            color: "blue",
        },
        {
            title: "Open Connections",
            value: "23,845",
            icon: <Box size={24} />,
            color: "green",
        },
        {
            title: "Total Input (Mbps)",
            value: "6,754",
            icon: <Download size={24} />,
            color: "pink",
        },
        {
            title: "Total Output (Mbps)",
            value: "12,345",
            icon: <Upload size={24} />,
            color: "orange",
        },
        {
            title: "Online Streams",
            value: "1,561",
            icon: <Activity size={24} />,
            color: "purple",
        },
        {
            title: "Offline Streams",
            value: "324",
            icon: <CircleOff size={24} />,
            color: "red",
        },
    ];

    const servers = [
        {
            name: "Main Server",
            ip: "15.235.87.59",
            uptime: "12h 20m",
            status: "online",
            metrics: {
                Connections: { value: "0", percentage: 0 },
                Users: { value: "0", percentage: 0 },
                "Streams Live": { value: "0", percentage: 0 },
                "Streams Off": { value: "0", percentage: 0 },
                Input: { value: "0", percentage: 0 },
                Output: { value: "1", percentage: 5 },
                CPU: { value: "5%", percentage: 5 },
                RAM: { value: "5%", percentage: 5 },
                Network: { value: "10%", percentage: 10 },
            },
        },
        {
            name: "Server Name 1",
            ip: "212.102.60.213",
            uptime: "12h 16m",
            status: "online",
            metrics: {
                Connections: { value: "8828", percentage: 45 },
                Users: { value: "3", percentage: 15 },
                "Streams Live": { value: "504", percentage: 25 },
                "Streams Off": { value: "27", percentage: 10 },
                Input: { value: "3093", percentage: 30 },
                Output: { value: "6070", percentage: 60 },
                CPU: { value: "25%", percentage: 25 },
                RAM: { value: "34%", percentage: 34 },
                Network: { value: "450%", percentage: 45 },
            },
        },
        {
            name: "Server Name 2",
            ip: "195.181.163.155",
            uptime: "41d 7h",
            status: "online",
            metrics: {
                Connections: { value: "378", percentage: 20 },
                Users: { value: "2", percentage: 10 },
                "Streams Live": { value: "47", percentage: 15 },
                "Streams Off": { value: "0", percentage: 0 },
                Input: { value: "0", percentage: 0 },
                Output: { value: "0", percentage: 0 },
                CPU: { value: "8%", percentage: 8 },
                RAM: { value: "15%", percentage: 15 },
                Network: { value: "120%", percentage: 12 },
            },
        },
        {
            name: "Server Name 3",
            ip: "212.102.60.216",
            uptime: "12d 19h",
            status: "online",
            metrics: {
                Connections: { value: "368", percentage: 18 },
                Users: { value: "4", percentage: 20 },
                "Streams Live": { value: "269", percentage: 27 },
                "Streams Off": { value: "23", percentage: 12 },
                Input: { value: "0", percentage: 0 },
                Output: { value: "0", percentage: 0 },
                CPU: { value: "12%", percentage: 12 },
                RAM: { value: "28%", percentage: 28 },
                Network: { value: "180%", percentage: 18 },
            },
        },
        {
            name: "Server Name 4",
            ip: "195.181.163.21",
            uptime: "41d 13h",
            status: "offline",
            metrics: {
                Connections: { value: "705", percentage: 35 },
                Users: { value: "10", percentage: 50 },
                "Streams Live": { value: "324", percentage: 40 },
                "Streams Off": { value: "71", percentage: 30 },
                Input: { value: "1186", percentage: 20 },
                Output: { value: "3251", percentage: 45 },
                CPU: { value: "45%", percentage: 45 },
                RAM: { value: "53%", percentage: 53 },
                Network: { value: "0%", percentage: 0 },
            },
        },
        {
            name: "Server Name 5",
            ip: "121.127.41.143",
            uptime: "231d 1h",
            status: "online",
            metrics: {
                Connections: { value: "13486", percentage: 70 },
                Users: { value: "3", percentage: 15 },
                "Streams Live": { value: "417", percentage: 25 },
                "Streams Off": { value: "25", percentage: 12 },
                Input: { value: "2485", percentage: 35 },
                Output: { value: "6135", percentage: 65 },
                CPU: { value: "67%", percentage: 67 },
                RAM: { value: "71%", percentage: 71 },
                Network: { value: "850%", percentage: 85 },
            },
        },
        {
            name: "Server Name 6",
            ip: "10.100.100.100",
            uptime: "0d 0h",
            status: "offline",
            metrics: {
                Connections: { value: "0", percentage: 0 },
                Users: { value: "0", percentage: 0 },
                "Streams Live": { value: "0", percentage: 0 },
                "Streams Off": { value: "0", percentage: 0 },
                Input: { value: "0", percentage: 0 },
                Output: { value: "0", percentage: 0 },
                CPU: { value: "0%", percentage: 0 },
                RAM: { value: "0%", percentage: 0 },
                Network: { value: "0%", percentage: 0 },
            },
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Server Monitoring Dashboard
                    </h1>
                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        <RefreshCw size={16} />
                        Refresh
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <DashboardCard
                            key={index}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            color={stat.color}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servers.map((server, index) => (
                        <ServerCard key={index} server={server} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
