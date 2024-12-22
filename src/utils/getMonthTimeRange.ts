export const getMonthTimeRange = () => {
    const now = new Date();

    const START_HOUR = 0;
    const START_MINUTE = 0;
    const START_SECOND = 0;

    const ONE_DAY = 1;
    const ONE_MONTH = 1;

    const END_HOUR = 23;
    const END_MINUTE = 59;
    const END_SECOND = 59;
    const DATE_LENGTH_WITHOUT_MILLISECONDS = 19;

    const timeStart = new Date(
        Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth() - ONE_MONTH,
            now.getUTCDate() - ONE_DAY,
            START_HOUR,
            START_MINUTE,
            START_SECOND
        )
    );
    const timeStartString = timeStart.toISOString().slice(0, DATE_LENGTH_WITHOUT_MILLISECONDS);

    const timeEnd = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - ONE_DAY, END_HOUR, END_MINUTE, END_SECOND)
    );
    const timeEndString = timeEnd.toISOString().slice(0, DATE_LENGTH_WITHOUT_MILLISECONDS);

    return [timeStartString, timeEndString];
};
