app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function(category) {
            if (category) {
                return $http.get('/cards?category='+category).then(function(response) {
                    return response.data;
                });
            } else {
                return $http.get('/cards')
                .then(function(response) {
                    return response.data;
                });
            }

        },
     };
});