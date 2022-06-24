/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arrayOfArrays) {
  let records = arrayOfArrays.map((array) => createEmployeeRecord(array))
  return records
}

function createTimeInEvent(dateStamp) {
    const dateArray = dateStamp.split(' ')
    this.timeInEvents = [{
      type: "TimeIn",
      hour: parseInt(dateArray[1]),
      date: dateArray[0]
    }]
    return this
}

function createTimeOutEvent(dateStamp) {
    const dateArray = dateStamp.split(" ")
    this.timeOutEvents = [{
        type: "TimeOut",
        hour: parseInt(dateArray[1]),
        date: dateArray[0]
    }]
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn;
    let timeOut;
    this.timeInEvents.find((timeInevent) => {
      if(timeInevent.date === dateStamp) {
        timeIn = timeInevent.hour
      }
    })
  
    this.timeOutEvents.find((timeOutEvent) => {
      if(timeOutEvent.date === dateStamp) {
        timeOut = timeOutEvent.hour
      }
    })
    return (timeOut -timeIn)/100

}

function wagesEarnedOnDate(dateStamp) {
  let wage = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
  return  parseFloat(wage.toString())
    
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employeeRecord) => {
    return employeeRecord.firstName === firstName
    })
}

function calculatePayroll(arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
    return memo + allWagesFor.call(rec)
}, 0)
}

