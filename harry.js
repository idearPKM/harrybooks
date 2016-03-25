/* global angular */
angular.module('app', [])
  .controller('harryCal', function ($scope) {
    $scope.book = [
      {
        id: 1,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม1',
        price: 100,
        img: 'hr1.jpg',
        amount: 1},
      {
        id: 2,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม2',
        price: 100,
        img: 'hr2.jpg',
        amount: 1},
      {
        id: 3,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม3',
        price: 100,
        img: 'hr3.jpg',
        amount: 1},
      {
        id: 4,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม4',
        price: 100,
        img: 'hr4.jpg',
        amount: 1},
      {
        id: 5,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม5',
        price: 100,
        img: 'hr5.jpg',
        amount: 1},
      {
        id: 6,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม6',
        price: 100,
        img: 'hr6.jpg',
        amount: 1},
      {
        id: 7,
        name: 'แฮร์รี่ พอตเตอร์ เล่ม7',
        price: 100,
        img: 'hr7.jpg',
        amount: 1}
    ]

    $scope.booksList = []
    $scope.amountCal = []
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
      $scope.totalCal()
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
      // $scope.totalCal()
    }

    $scope.cal = function () {
      if ($scope.booksList.length > 0) {
        $scope.total = 0
        for (var n = 0; n < $scope.booksList.length; n++) {
          $scope.total += $scope.booksList[n].amount * 100

          $scope.amount[n] = $scope.booksList[n].amount
        }
      }
    }

    $scope.booksList.sort(function (a, b) { // เรียงค่ามาก > น้อย
      if (a.amount > b.amount) return -1
      if (a.amount < b.amount) return 1
      return 0
    })

    $scope.check = function (list) {
      for (var n = 0; n < $scope.booksList.length; n++) {
        if (list.name === $scope.booksList[n].name) {
          check = n
          return true
        }
      }
    }

    $scope.totalCal = function (amount) {
      $scope.cal = 0
      var count = 0 // เช็ครอบเข้า เงื่อนไขลดราคา
      var exit = 0
      do {
        for (var i = 0; i < $scope.amount.length; i++) {
          if ($scope.amount[i] !== 0) {
            count += 1
          }
          if ($scope.amount[i] === 0) {
            count += 0
            break
          }
        }
          // ///// เงื่อนไขลดราคา
        if (count === 1) {
                // มีไว้เฉยๆๆ ไม่มีทำงานไม่ได้
          console.log('1')
        }
        if (count === 2) {
          $scope.cal += ((count * 100) * 0.1)
          console.log('2')
        } else if (count === 3) {
          $scope.cal += ((count * 100) * 0.2)
          console.log('3')
        } else if (count === 4) {
          $scope.cal += ((count * 100) * 0.3)
          console.log('4')
        } else if (count === 5) {
          $scope.cal += ((count * 100) * 0.4)
          console.log('5')
        } else if (count === 6) {
          $scope.cal += ((count * 100) * 0.5)
          console.log('6')
        } else if (count === 7) {
          $scope.cal += ((count * 100) * 0.6)
          console.log('7')
        } else if (count === 0) {
          exit = 1
          console.log('exit')
        }
            // // ลบ จำนวนออกทีละ 1
        for (var a = 0; a < $scope.amount.length; a++) {
          if ($scope.amount[a] > 0) {
            $scope.amount[a] -= 1
            count = 0 // รีค่าใหม่
          }
        }
      } while (exit !== 1)
      console.log($scope.cal)
    }
  })
