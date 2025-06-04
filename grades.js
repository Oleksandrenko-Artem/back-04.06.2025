exports.calcAverage = function (grades) {
    const summa = grades.reduce((sum, grade) => sum + grade, 0);
    return summa / grades.length;
}