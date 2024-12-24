import { STOCKS_CODES } from "@constants/timelinePage";
import { getMonthTimeRange } from "@utils/getMonthTimeRange";

export const chartAPI = {
    constants: {
        BASE_URL: "https://rest.coinapi.io/v1/ohlcv",
        STOCKS_CODES: {
            [STOCKS_CODES.BTC]: "BITSTAMP_SPOT_BTC_USD",
            [STOCKS_CODES.LTC]: "BITSTAMP_SPOT_LTC_USD",
        },
        QUERY_PARAMS: {
            PERIOD_ID: "period_id",
            TIME_START: "time_start",
            TIME_END: "time_start",
        },
        PERIODS: {
            ONE_DAY: "1DAY",
        },
        HEADERS: {
            API_KEY: "X-CoinAPI-Key",
        },
    },
    buildHistoryEndpoint(stockCode: StockCodesType) {
        const baseUrl = this.constants.BASE_URL;

        const code = this.constants.STOCKS_CODES[stockCode];

        const periodQuery = this.constants.QUERY_PARAMS.PERIOD_ID;
        const period = this.constants.PERIODS.ONE_DAY;

        const timeStartQuery = this.constants.QUERY_PARAMS.TIME_START;
        const timeEndQuery = this.constants.QUERY_PARAMS.TIME_END;

        const now = new Date();
        const [timeStart, timeEnd] = getMonthTimeRange(now);

        const url = `${baseUrl}/${code}/history?${periodQuery}=${period}&${timeStartQuery}=${timeStart}&${timeEndQuery}=${timeEnd}`;

        return {
            url,
            headers: { [this.constants.HEADERS.API_KEY]: process.env.COIN_API_KEY || "" },
        };
    },
};
