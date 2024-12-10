import { DATE_NUMBERS } from "@constants/constants";

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
    // TODO: add ESLint rule for return types of function
    generateLastDay() {
        const today = new Date();
        const lastDay = new Date(today);
        lastDay.setDate(today.getDate() - 1);
        lastDay.setHours(23, 59, 59, 999);

        return lastDay;
    },
    extractDate(dateString: string) {
        if (dateString === "") return dateString;
        const datePart = dateString.split("T")[DATE_NUMBERS.DATE_PART_INDEX];
        return datePart;
    },
    extractHoursAndMinutes(dateString: string) {
        if (!dateString) return dateString;

        const timePart = dateString.split("T")[DATE_NUMBERS.TIME_PART_INDEX];
        const [hours, minutes] = timePart.split(":");
        let hoursNumber = Number(hours);
        const isPM = hoursNumber >= 12;

        hoursNumber = hoursNumber % 12 || 12;
        const dayHalf = isPM ? "PM" : "AM";

        return `${hoursNumber}:${minutes} ${dayHalf}`;
    },
};
