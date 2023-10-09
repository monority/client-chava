export const convertDate = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dob;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInYears = ageInMilliseconds / millisecondsInYear;
    const age = Math.floor(ageInYears);

}
