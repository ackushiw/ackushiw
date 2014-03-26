'use strict';

angular.module('ackushiwApp')
    .controller('ActingCtrl', function($scope) {
        $scope.accordion = true;

        $scope.stats = {
            eyes: 'Dark Hazel',
            hair: 'Dark Brown',
            height: '5\' 10"',
            weight: '145lb'
        };

        $scope.theater = [
        {
            title: 'Bazaar Noir',
            character: 'The Riddler',
            director: 'Jesse Patch, Dir'
        },  {
            title: 'Edward Scissorhands',
            character: 'Edward',
            director: 'Richard Crawford'
        },  {
            title: 'Double Falsehood',
            character: 'Julio',
            director: 'Ron Song Destro'
        }, {
            title: 'The Comedy of Errors',
            character: 'Antipholus of Ephesus',
            director: 'Ron Song Destro'
        }, {
            title: 'Love\'s Labour\'s Lost',
            character: 'Berowne',
            director: 'Ron Song Destro'
        }, {
            title: 'Macbeth',
            character: 'Malcolm',
            director: 'Vasile Nedelcu'
        },  {
            title: 'The Taming of the Shrew',
            character: 'Tranio',
            director: 'Danielle Gaillemain'
        },  {
            title: 'Romeo and Juliet',
            character: 'Romeo',
            director: 'Sven Saar'
        }];

        $scope.film = [
        {
            title: 'Stats',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Theater',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Film',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Commercial',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Conservatory Theater, AADA NYC',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Training',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Skills',
            character: 'test',
            director: 'testdir'
        }];

        $scope.commercial = [
        {
            title: 'Stats',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Theater',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Film',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Commercial',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Conservatory Theater, AADA NYC',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Training',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Skills',
            character: 'test',
            director: 'testdir'
        }];

        $scope.aada = [
        {
            title: 'Stats',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Theater',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Film',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Commercial',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Conservatory Theater, AADA NYC',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Training',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Skills',
            character: 'test',
            director: 'testdir'
        }];

        $scope.training = [
        {
            title: 'Stats',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Theater',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Film',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Commercial',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Conservatory Theater, AADA NYC',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Training',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Skills',
            character: 'test',
            director: 'testdir'
        }];

        $scope.skills = [
        {
            title: 'Stats',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Theater',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Film',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Commercial',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Conservatory Theater, AADA NYC',
            character: 'test',
            director: 'testdir'
        }, {
            title: 'Training',
            character: 'test',
            director: 'testdir'
        },  {
            title: 'Skills',
            character: 'test',
            director: 'testdir'
        }];



        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };
    });