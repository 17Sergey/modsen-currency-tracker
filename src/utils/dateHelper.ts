export const dateHelper = {
    formatDate(date: Date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${day}.${month}.${year}T${hours}:${minutes}:${seconds}`;
    },
    generateLastDay() {
        const today = new Date();
        const lastDay = new Date(today);
        lastDay.setDate(today.getDate() - 1);
        lastDay.setHours(23, 59, 59, 999);

        return lastDay;
    },
    generateFormattedLastDay() {
        const lastDay = this.generateLastDay();
        return this.formatDate(lastDay);
    },
    extractDate(date: Date) {
        if (!date) return "";

        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
        return date.toLocaleDateString(undefined, options);
    },
    extractHoursAndMinutes(date: Date) {
        if (!date) return "";

        const options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
        return date.toLocaleTimeString(undefined, options);
    },
    getPrettyDateFromStr(str: string) {
        return str.split("-").reverse().join(".");
    },
    getDateFromPrettyStr(str: string) {
        return str.split(".").reverse().join("-");
    },
};
