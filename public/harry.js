/* global angular */
angular.module('app', [])
  .controller('harryCal', function ($scope) {
    $scope.book = [
      {
        id: 1,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม1',
        price: 100,
        img: 'hr1.jpg',
        amount: 1
      },
      {
        id: 2,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม2',
        price: 100,
        img: 'hr2.jpg',
        amount: 1
      },
      {
        id: 3,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม3',
        price: 100,
        img: 'hr3.jpg',
        amount: 1
      },
      {
        id: 4,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม4',
        price: 100,
        img: 'hr4.jpg',
        amount: 1
      },
      {
        id: 5,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม5',
        price: 100,
        img: 'hr5.jpg',
        amount: 1
      },
      {
        id: 6,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม6',
        price: 100,
        img: 'hr6.jpg',
        amount: 1
      },
      {
        id: 7,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม7',
        price: 100,
        img: 'hr7.jpg',
        amount: 1
      }
    ]

    $scope.booksList = []
    $scope.amount = []
    var check = 0
    $scope.total = 0

    $scope.add = function (list) {
      if ($scope.check(list)) {
        $scope.booksList[check].amount += 1
      } else {
        $scope.booksList.push(list)
      }
      $scope.booksList.sort()
      $scope.cal()
      console.log($scope.booksList)
    }

    $scope.del = function (index) {
      $scope.check(index)
      if ($scope.booksList[check].amount > 1) {
        $scope.booksList[check].amount -= 1
      } else {
        $scope.booksList.splice(index, 1)
      }
      $scope.booksList.sort()
      $scope.cal()
    }

    $scope.cal = function () {
      // if ($scope.booksList.length > 0) {
      $scope.total = 0
      for (var n = 0; n < $scope.booksList.length; n++) {
        $scope.total += $scope.booksList[n].amount * 100
        $scope.amount[n] = $scope.booksList[n].amount
      }
      discount($scope.amount)
    // }
    }
    function discount (data) {
      $scope.discount = 0
      var countbook = 0
      for (var i = 0; i <= data.length; i++) {
        for (var j = 0; j < data.length; j++) {
          if (data[j] > 0) {
            countbook++
          }
        }
        console.log('countbook' + countbook)
        if (countbook === 2) {
          console.log('20')
          $scope.discount += 20
        } else if (countbook === 3) {
          $scope.discount += 60
          console.log('60')
        } else if (countbook === 4) {
          $scope.discount += 120
          console.log('120')
        } else if (countbook === 5) {
          $scope.discount += 200
          console.log('200')
        } else if (countbook === 6) {
          $scope.discount += 300
          console.log('300')
        } else if (countbook === 7) {
          $scope.discount += 420
          console.log('420')
        }
        for (var l = 0; l < data.length; l++) {
          $scope.amount[l] -= 1
          countbook = 0
        }
      }
      console.log('discount' + $scope.discount)
      console.log('amount' + $scope.amount)
    }
    // $scope.booksList.sort(function (a, b) { // เรียงค่ามาก > น้อย
    //   if (a.amount > b.amount) return -1
    //   if (a.amount < b.amount) return 1
    //   return 0
    // })
    $scope.check = function (list) {
      for (var n = 0; n < $scope.booksList.length; n++) {
        if (list.name === $scope.booksList[n].name) {
          check = n
          return true
        }
      }
    }
  })
