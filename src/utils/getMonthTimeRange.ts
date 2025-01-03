export const getMonthTimeRange = (date: Date) => {
    const now = new Date(date);

    const START_HOUR = 0;
    const START_MINUTE = 0;
    const START_SECOND = 0;

    const END_HOUR = 23;
    const END_MINUTE = 59;
    const END_SECOND = 59;

    const ONE_MONTH = 1;
    const ONE_DAY = 1;

    const DATE_LENGTH_WITHOUT_MILLISECONDS = 19;

    const yesterday = new Date(now);
    yesterday.setUTCDate(now.getUTCDate() - ONE_DAY);

    const yesterdayMonthAgo = new Date(yesterday);
    yesterdayMonthAgo.setUTCMonth(yesterday.getUTCMonth() - ONE_MONTH);

    const timeStartString = new Date(
        Date.UTC(
            yesterdayMonthAgo.getUTCFullYear(),
            yesterdayMonthAgo.getUTCMonth(),
            yesterdayMonthAgo.getUTCDate(),
            START_HOUR,
            START_MINUTE,
            START_SECOND
        )
    )
        .toISOString()
        .slice(0, DATE_LENGTH_WITHOUT_MILLISECONDS);

    const timeEndString = new Date(
        Date.UTC(
            yesterday.getUTCFullYear(),
            yesterday.getUTCMonth(),
            yesterday.getUTCDate(),
            END_HOUR,
            END_MINUTE,
            END_SECOND
        )
    )
        .toISOString()
        .slice(0, DATE_LENGTH_WITHOUT_MILLISECONDS);

    return [timeStartString, timeEndString];
};
