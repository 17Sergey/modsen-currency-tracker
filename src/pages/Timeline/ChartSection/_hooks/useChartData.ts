import { useState } from "react";

import { formatStocksDataForChart } from "@utils/formatStocksDataForChart";

const data = [
    {
        time_period_start: "2024-11-09T00:00:00.0000000Z",
        time_period_end: "2024-11-10T00:00:00.0000000Z",
        time_open: "2024-11-09T00:00:05.1790000Z",
        time_close: "2024-11-09T23:59:51.3660000Z",
        price_open: 76560,
        price_high: 76941,
        price_low: 75648,
        price_close: 76722,
        volume_traded: 837.8274541900004,
        trades_count: 27983,
    },
    {
        time_period_start: "2024-11-10T00:00:00.0000000Z",
        time_period_end: "2024-11-11T00:00:00.0000000Z",
        time_open: "2024-11-10T00:00:00.7910000Z",
        time_close: "2024-11-10T23:59:48.4680000Z",
        price_open: 76707,
        price_high: 81482,
        price_low: 76554,
        price_close: 80425,
        volume_traded: 2739.5834052500013,
        trades_count: 45096,
    },
    {
        time_period_start: "2024-11-11T00:00:00.0000000Z",
        time_period_end: "2024-11-12T00:00:00.0000000Z",
        time_open: "2024-11-11T00:00:02.9520000Z",
        time_close: "2024-11-11T23:59:59.9600000Z",
        price_open: 80426,
        price_high: 89643,
        price_low: 80280,
        price_close: 88770,
        volume_traded: 6694.446078849991,
        trades_count: 75850,
    },
    {
        time_period_start: "2024-11-12T00:00:00.0000000Z",
        time_period_end: "2024-11-13T00:00:00.0000000Z",
        time_open: "2024-11-12T00:00:02.1840000Z",
        time_close: "2024-11-12T23:59:57.8950000Z",
        price_open: 88771,
        price_high: 90243,
        price_low: 85121,
        price_close: 88031,
        volume_traded: 8033.109837649998,
        trades_count: 78723,
    },
    {
        time_period_start: "2024-11-13T00:00:00.0000000Z",
        time_period_end: "2024-11-14T00:00:00.0000000Z",
        time_open: "2024-11-13T00:00:02.4480000Z",
        time_close: "2024-11-13T23:59:47.0390000Z",
        price_open: 88038,
        price_high: 93483,
        price_low: 86263,
        price_close: 90521,
        volume_traded: 7337.980677309995,
        trades_count: 76040,
    },
    {
        time_period_start: "2024-11-14T00:00:00.0000000Z",
        time_period_end: "2024-11-15T00:00:00.0000000Z",
        time_open: "2024-11-14T00:00:02.1460000Z",
        time_close: "2024-11-14T23:59:51.4240000Z",
        price_open: 90498,
        price_high: 91804,
        price_low: 86685,
        price_close: 87333,
        volume_traded: 3801.7257239100036,
        trades_count: 51125,
    },
    {
        time_period_start: "2024-11-15T00:00:00.0000000Z",
        time_period_end: "2024-11-16T00:00:00.0000000Z",
        time_open: "2024-11-15T00:00:07.1170000Z",
        time_close: "2024-11-15T23:59:52.0350000Z",
        price_open: 87298,
        price_high: 91909,
        price_low: 87119,
        price_close: 91070,
        volume_traded: 4491.1510691300045,
        trades_count: 56678,
    },
    {
        time_period_start: "2024-11-16T00:00:00.0000000Z",
        time_period_end: "2024-11-17T00:00:00.0000000Z",
        time_open: "2024-11-16T00:00:04.0040000Z",
        time_close: "2024-11-16T23:59:57.3100000Z",
        price_open: 91069,
        price_high: 91778,
        price_low: 90100,
        price_close: 90608,
        volume_traded: 1538.3404374399997,
        trades_count: 31666,
    },
    {
        time_period_start: "2024-11-17T00:00:00.0000000Z",
        time_period_end: "2024-11-18T00:00:00.0000000Z",
        time_open: "2024-11-17T00:00:02.7590000Z",
        time_close: "2024-11-17T23:59:56.8110000Z",
        price_open: 90643,
        price_high: 91429,
        price_low: 88709,
        price_close: 89861,
        volume_traded: 2016.09767635,
        trades_count: 21397,
    },
    {
        time_period_start: "2024-11-18T00:00:00.0000000Z",
        time_period_end: "2024-11-19T00:00:00.0000000Z",
        time_open: "2024-11-18T00:00:04.7590000Z",
        time_close: "2024-11-18T23:59:58.7360000Z",
        price_open: 89865,
        price_high: 92624,
        price_low: 89392,
        price_close: 90512,
        volume_traded: 4276.187216359998,
        trades_count: 39957,
    },
    {
        time_period_start: "2024-11-19T00:00:00.0000000Z",
        time_period_end: "2024-11-20T00:00:00.0000000Z",
        time_open: "2024-11-19T00:00:01.6370000Z",
        time_close: "2024-11-19T23:59:58.1510000Z",
        price_open: 90514,
        price_high: 94057,
        price_low: 90407,
        price_close: 92380,
        volume_traded: 3884.882624370003,
        trades_count: 46846,
    },
    {
        time_period_start: "2024-11-20T00:00:00.0000000Z",
        time_period_end: "2024-11-21T00:00:00.0000000Z",
        time_open: "2024-11-20T00:00:00.1900000Z",
        time_close: "2024-11-20T23:59:52.7820000Z",
        price_open: 92434,
        price_high: 94942,
        price_low: 91407,
        price_close: 94373,
        volume_traded: 9319.620524959995,
        trades_count: 60298,
    },
    {
        time_period_start: "2024-11-21T00:00:00.0000000Z",
        time_period_end: "2024-11-22T00:00:00.0000000Z",
        time_open: "2024-11-21T00:00:00.7410000Z",
        time_close: "2024-11-21T23:59:46.3330000Z",
        price_open: 94374,
        price_high: 99121,
        price_low: 94106,
        price_close: 98451,
        volume_traded: 7280.153671029999,
        trades_count: 69067,
    },
    {
        time_period_start: "2024-11-22T00:00:00.0000000Z",
        time_period_end: "2024-11-23T00:00:00.0000000Z",
        time_open: "2024-11-22T00:00:01.7490000Z",
        time_close: "2024-11-22T23:59:45.6890000Z",
        price_open: 98451,
        price_high: 99800,
        price_low: 97236,
        price_close: 99013,
        volume_traded: 4642.388265949998,
        trades_count: 57090,
    },
    {
        time_period_start: "2024-11-23T00:00:00.0000000Z",
        time_period_end: "2024-11-24T00:00:00.0000000Z",
        time_open: "2024-11-23T00:00:05.3830000Z",
        time_close: "2024-11-23T23:58:47.7260000Z",
        price_open: 99010,
        price_high: 99015,
        price_low: 97226,
        price_close: 97785,
        volume_traded: 1719.1247446200025,
        trades_count: 26119,
    },
    {
        time_period_start: "2024-11-24T00:00:00.0000000Z",
        time_period_end: "2024-11-25T00:00:00.0000000Z",
        time_open: "2024-11-24T00:00:08.2600000Z",
        time_close: "2024-11-24T23:59:58.6600000Z",
        price_open: 97765,
        price_high: 98660,
        price_low: 95796,
        price_close: 98007,
        volume_traded: 1814.0047345600005,
        trades_count: 14860,
    },
    {
        time_period_start: "2024-11-25T00:00:00.0000000Z",
        time_period_end: "2024-11-26T00:00:00.0000000Z",
        time_open: "2024-11-25T00:00:00.2300000Z",
        time_close: "2024-11-25T23:59:23.0150000Z",
        price_open: 98021,
        price_high: 98966,
        price_low: 92584,
        price_close: 93035,
        volume_traded: 2941.422718630002,
        trades_count: 24712,
    },
    {
        time_period_start: "2024-11-26T00:00:00.0000000Z",
        time_period_end: "2024-11-27T00:00:00.0000000Z",
        time_open: "2024-11-26T00:00:13.2880000Z",
        time_close: "2024-11-26T23:59:58.3390000Z",
        price_open: 93006,
        price_high: 94999,
        price_low: 90742,
        price_close: 91925,
        volume_traded: 3577.963352869997,
        trades_count: 24418,
    },
    {
        time_period_start: "2024-11-27T00:00:00.0000000Z",
        time_period_end: "2024-11-28T00:00:00.0000000Z",
        time_open: "2024-11-27T00:00:12.0540000Z",
        time_close: "2024-11-27T23:59:51.9160000Z",
        price_open: 91929,
        price_high: 97353,
        price_low: 91760,
        price_close: 95978,
        volume_traded: 2999.1341579800005,
        trades_count: 22568,
    },
    {
        time_period_start: "2024-11-28T00:00:00.0000000Z",
        time_period_end: "2024-11-29T00:00:00.0000000Z",
        time_open: "2024-11-28T00:00:21.2780000Z",
        time_close: "2024-11-28T23:58:45.2780000Z",
        price_open: 95945,
        price_high: 96658,
        price_low: 94670,
        price_close: 95661,
        volume_traded: 2070.270768300002,
        trades_count: 14324,
    },
    {
        time_period_start: "2024-11-29T00:00:00.0000000Z",
        time_period_end: "2024-11-30T00:00:00.0000000Z",
        time_open: "2024-11-29T00:00:02.7930000Z",
        time_close: "2024-11-29T23:59:52.8960000Z",
        price_open: 95670,
        price_high: 98745,
        price_low: 95410,
        price_close: 97512,
        volume_traded: 2410.839976000001,
        trades_count: 20116,
    },
    {
        time_period_start: "2024-11-30T00:00:00.0000000Z",
        time_period_end: "2024-12-01T00:00:00.0000000Z",
        time_open: "2024-11-30T00:00:02.6980000Z",
        time_close: "2024-11-30T23:58:38.9620000Z",
        price_open: 97510,
        price_high: 97510,
        price_low: 96112,
        price_close: 96441,
        volume_traded: 646.2207807700009,
        trades_count: 7035,
    },
    {
        time_period_start: "2024-12-01T00:00:00.0000000Z",
        time_period_end: "2024-12-02T00:00:00.0000000Z",
        time_open: "2024-12-01T00:00:07.8110000Z",
        time_close: "2024-12-01T23:59:41.9140000Z",
        price_open: 96471,
        price_high: 97880,
        price_low: 95758,
        price_close: 97291,
        volume_traded: 884.6556605000001,
        trades_count: 9802,
    },
    {
        time_period_start: "2024-12-02T00:00:00.0000000Z",
        time_period_end: "2024-12-03T00:00:00.0000000Z",
        time_open: "2024-12-02T00:00:05.5810000Z",
        time_close: "2024-12-02T23:59:45.4530000Z",
        price_open: 97260,
        price_high: 98200,
        price_low: 94403,
        price_close: 95859,
        volume_traded: 3224.2303893299986,
        trades_count: 28032,
    },
    {
        time_period_start: "2024-12-03T00:00:00.0000000Z",
        time_period_end: "2024-12-04T00:00:00.0000000Z",
        time_open: "2024-12-03T00:00:00.1950000Z",
        time_close: "2024-12-03T23:59:48.0190000Z",
        price_open: 95858,
        price_high: 96301,
        price_low: 93590,
        price_close: 95926,
        volume_traded: 3490.267889490001,
        trades_count: 44363,
    },
    {
        time_period_start: "2024-12-04T00:00:00.0000000Z",
        time_period_end: "2024-12-05T00:00:00.0000000Z",
        time_open: "2024-12-04T00:00:02.5650000Z",
        time_close: "2024-12-04T23:59:59.7570000Z",
        price_open: 95926,
        price_high: 99250,
        price_low: 94661,
        price_close: 98773,
        volume_traded: 4309.941273729998,
        trades_count: 58161,
    },
    {
        time_period_start: "2024-12-05T00:00:00.0000000Z",
        time_period_end: "2024-12-06T00:00:00.0000000Z",
        time_open: "2024-12-05T00:00:05.9620000Z",
        time_close: "2024-12-05T23:59:48.4730000Z",
        price_open: 98751,
        price_high: 103647,
        price_low: 92092,
        price_close: 97057,
        volume_traded: 7459.515925779999,
        trades_count: 112322,
    },
    {
        time_period_start: "2024-12-06T00:00:00.0000000Z",
        time_period_end: "2024-12-07T00:00:00.0000000Z",
        time_open: "2024-12-06T00:00:14.6590000Z",
        time_close: "2024-12-06T23:59:51.9160000Z",
        price_open: 96968,
        price_high: 102098,
        price_low: 96463,
        price_close: 99898,
        volume_traded: 2619.7979397399977,
        trades_count: 65357,
    },
    {
        time_period_start: "2024-12-07T00:00:00.0000000Z",
        time_period_end: "2024-12-08T00:00:00.0000000Z",
        time_open: "2024-12-07T00:00:15.1380000Z",
        time_close: "2024-12-07T23:59:19.6280000Z",
        price_open: 99898,
        price_high: 100575,
        price_low: 99121,
        price_close: 99930,
        volume_traded: 587.8767450899995,
        trades_count: 7895,
    },
    {
        time_period_start: "2024-12-08T00:00:00.0000000Z",
        time_period_end: "2024-12-09T00:00:00.0000000Z",
        time_open: "2024-12-08T00:00:55.7320000Z",
        time_close: "2024-12-08T23:59:01.3490000Z",
        price_open: 99969,
        price_high: 101407,
        price_low: 98752,
        price_close: 101204,
        volume_traded: 1073.3276339100003,
        trades_count: 9399,
    },
    {
        time_period_start: "2024-12-09T00:00:00.0000000Z",
        time_period_end: "2024-12-10T00:00:00.0000000Z",
        time_open: "2024-12-09T00:00:05.3670000Z",
        time_close: "2024-12-09T23:59:33.6210000Z",
        price_open: 101188,
        price_high: 101271,
        price_low: 94249,
        price_close: 97468,
        volume_traded: 2468.7928385399973,
        trades_count: 23750,
    },
];
const formattedData = formatStocksDataForChart(data);

export const useChartData = () => {
    const [chartData, setChartData] = useState(formattedData);

    const handleUpdateData = (newData: FormattedStocksData) => {
        setChartData(newData);
    };

    return { chartData, handleUpdateData };
};