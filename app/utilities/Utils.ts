import { MINUTES_IN_AN_HOUR } from "../constants/constants"

export const Utils = {
    convertToHourMinuteFormat(minutes: number): string {
        if (minutes < MINUTES_IN_AN_HOUR) return `${minutes} min`;

        const hours = Math.trunc(minutes / MINUTES_IN_AN_HOUR);
        const remainingMinutes = minutes % MINUTES_IN_AN_HOUR;

        return `${hours} hr ${remainingMinutes} min`
    }
}