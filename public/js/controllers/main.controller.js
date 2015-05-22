app.controller('MainController', function ($scope,  FlashCardsFactory, ScoreFactory) {

  FlashCardsFactory.getFlashCards().then(function(data) {
      $scope.flashCards = data;
  })

  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node',
    'Reset'
  ];

  $scope.clickedCat = null;

  $scope.getCategoryCards = function(category) {
    if (category === 'Reset') {
      FlashCardsFactory.getFlashCards().then(function(data) {
      $scope.flashCards = data;
      ScoreFactory.correct = 0;
      ScoreFactory.incorrect = 0;
      })
    } else {
      FlashCardsFactory.getFlashCards(category).then(function(data) {
        $scope.flashCards = data;

      })
    }
    $scope.clickedCat = category;
  }
	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
      answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
		}
	}
});