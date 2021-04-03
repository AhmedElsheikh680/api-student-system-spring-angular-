export class Student {
  id: number;
  fullName: string;
  gender: string;
  age: string;
  phone: string;
  address: string;
  dateCreated: Date;
  dateUpdated: Date;


  constructor(fullName: string, gender: string, age: string, phone: string, address: string, dateCreated: Date, dateUpdated: Date) {
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.dateCreated = dateCreated;
    this.dateUpdated = dateUpdated;
  }


}
