

export const shuffleAnswers = question => {
    const unsuffledAnswers =[
        question.correctAnswer,
        ...question.incorrectAnswers
    ]

    return unsuffledAnswers.map(unsuffledAnswer=> ({
        sort: Math.random(),
        value: unsuffledAnswer
    })).sort((a,b) => a.sort - b.sort).map((a) =>a.value);
}