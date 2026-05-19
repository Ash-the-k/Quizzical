function getQuizQuestions() {
  return [
    {
      id: "q1",
      question: "Which film has been critically regarded as the best film of all time?",
      correctOptionId: "q1-a1",
      options: [
        { id: "q1-a1", text: "Citizen Kane", isSelected: false },
        { id: "q1-a2", text: "Avatar", isSelected: false },
        { id: "q1-a3", text: "The Godfather Part II", isSelected: false },
        { id: "q1-a4", text: "The Room", isSelected: false },
      ],
    },
    {
      id: "q2",
      question:
        'In the movie "V for Vendetta," what is the date that masked vigilante "V" urges people to remember?',
      correctOptionId: "q2-a1",
      options: [
        { id: "q2-a1", text: "November 5th", isSelected: false },
        { id: "q2-a2", text: "November 6th", isSelected: false },
        { id: "q2-a3", text: "November 4th", isSelected: false },
        { id: "q2-a4", text: "September 5th", isSelected: false },
      ],
    },
  ]
}

export default getQuizQuestions