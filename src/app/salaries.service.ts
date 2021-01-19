import { Injectable } from "@angular/core";

@Injectable()
export class SalariesService {
  salaries = [
    {
      purcentage: 5,
      value: 1034
    },
    {
      purcentage: 10,
      value: 1188
    },
    {
      purcentage: 15,
      value: 1272
    },
    {
      purcentage: 20,
      value: 1346
    },
    {
      purcentage: 25,
      value: 1412
    },
    {
      purcentage: 30,
      value: 1479
    },
    {
      purcentage: 35,
      value: 1548
    },
    {
      purcentage: 40,
      value: 1621
    },
    {
      purcentage: 45,
      value: 1701
    },
    {
      purcentage: 50,
      value: 1789
    },
    {
      purcentage: 55,
      value: 1885
    },
    {
      purcentage: 60,
      value: 1995
    },
    {
      purcentage: 65,
      value: 2122
    },
    {
      purcentage: 70,
      value: 2273
    },
    {
      purcentage: 75,
      value: 2460
    },
    {
      purcentage: 80,
      value: 2709
    },
    {
      purcentage: 85,
      value: 3048
    },
    {
      purcentage: 90,
      value: 3575
    },
    {
      purcentage: 95,
      value: 4668
    }
  ];

  constructor() {}

  ReturnPourcentage(data) {
    if (data.salary && !isNaN(data.salary)) {
      for (var i = 0; i < this.salaries.length; i++) {
        if (data.salary < this.salaries[i].value) {
          return this.salaries[i].purcentage;
        }
      }
      if (data.salary > this.salaries[this.salaries.length]) {
        return this.salaries[this.salaries.length].purcentage;
      }
    } else {
      return null;
    }
  }
}
