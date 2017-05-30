'use strict';

angular.module('ackushiwApp')
  .controller('ActingCtrl', function($scope, $rootScope) {
    $rootScope.view = 'acting';
    $rootScope.image = null;
    //$scope.accordion = true;

    $scope.stats = {
      eyes: 'Dark Hazel',
      hair: 'Dark Brown',
      height: '5\' 10"',
      weight: '145 lb'
    };

    $scope.theater = [{
      title: 'Bazaar Noir',
      character: 'The Riddler',
      director: 'Jesse Patch, Dir'
    }, {
      title: 'Edward Scissorhands',
      character: 'Edward',
      director: 'Richard Crawford'
    }, {
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
    }, {
      title: 'The Taming of the Shrew',
      character: 'Tranio',
      director: 'Danielle Gaillemain'
    }, {
      title: 'Romeo and Juliet',
      character: 'Romeo',
      director: 'Sven Saar'
    }];

    $scope.film = [{
      title: 'Deep Down',
      character: 'Canute',
      director: 'Klark Chaudry, Dir'
    }, {
      title: 'Release You',
      character: 'Lake Ghost',
      director: 'Jessica Burgess'
    }, {
      title: 'Hard Times',
      character: 'Tiko',
      director: 'Matthew Glasson'
    }, {
      title: 'Nom Wah',
      character: 'Kenichi',
      director: 'Kevin Foong'
    }, {
      title: 'Burning Man',
      character: 'The Man in White',
      director: 'Arin Crumley'
    }, {
      title: 'On the Way to Heaven',
      character: 'Steven',
      director: 'Motomu Ishigaki'
    }, {
      title: 'Ep. 11 Poetry Brothel',
      character: 'The Outsider',
      director: 'Radar (WBP Labs)'
    }];

    $scope.commercial = [{
      title: 'Freia',
      role: 'Assistant',
      director: ''
    }, {
      title: 'Delve',
      role: '',
      director: 'Nicole Michaelis'
    }, {
      title: 'Lenovo',
      role: '',
      director: 'Michel Leroy'
    }, {
      title: 'Spread the Jam',
      role: '',
      director: ''
    }];

    $scope.aada = [{
      title: 'Habeas Corpus',
      character: 'Canon Throbbing',
      director: 'Bernie Sheredy, Dir'
    }, {
      title: 'The Triumph of Love',
      character: 'Harlequin',
      director: 'William Koch'
    }, {
      title: 'Saint Joan',
      character: 'Charles',
      director: 'Janis Powell'
    }, {
      title: 'Scenes and revelations',
      character: 'Dennis',
      director: 'Barbara Rubin'
    }, {
      title: 'The Runner Stumbles',
      character: 'Monsignor',
      director: 'Todd Peters'
    }];

    $scope.training = [{
      list: 'The American Academy Of Dramatic Arts, (NYC/Graduate, 2-year Conservatory program)'
    }, {
      list: 'Current Bat of the Flea Theater, Jim Simpson - Artistic Dir., Carol Ostrow - Prod. Dir.'
    }, {
      list: 'BoAr, Oxford Shakespeare Company Tribeca, Ron Song Destro - Artistic Dir.'
    }, {
      list: 'Shakespeare, Dynamic of Text - Lecoq Master class - Norman Taylor (Lecoq)'
    }, {
      list: 'Movement Theater Studio - Summer Intensive - Norman Taylor (Lecoq)'
    }, {
      list: 'The Dramatic World - Summer Intensive - Norman Taylor (Lecoq)'
    }, {
      list: 'The Actor\'s workout - Improv & Scene Study - Janis Powell (Meisner & Uta Hagen)'
    }, {
      list: 'Imagination, Action and Voice - Richard Crawford & Craig Bacon (Lecoq & Linklater)'
    }, {
      list: 'Comedic Performance - Richard Crawford & Virginia Scott'
    }, {
      list: 'Le Jeu - Geoff Sobelle & Contemporary Puppetry - Tom Lee'
    }];

    $scope.skills = [{
      list: 'Dialects & Accents (trained in IPA). Stage make-up. Confident Singer'
    }, {
      list: 'Martial Arts; Capoeira, Aikido, Bokkendo, Jodo (short staff), Archery, Horse Archery'
    }, {
      list: 'Advanced experimental Movement: Viewpoints, Lecoq, Eurythmy, Bothmer Gym.'
    }, {
      list: 'Stage combat: fencing, Japanese stick fighting, hand-to-hand combat, basic Choreography.'
    }, {
      list: 'Drawing & Painting, Surfing, Advanced Driving (manual), Juggling (balls & Clubs).'
    }, {
      list: 'I have a driver\'s license, plus US & UK passports'
    }];
  });
