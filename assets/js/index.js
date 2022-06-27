"use strict";
// Создать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// from должен быть меньше to
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("Value must be a number!");
    }
    this._from = value;
  }
  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("Value must be a number!");
    }
    if (value <= this._from) {
      throw new RangeError("To must be more than from!");
    }
    this._to = value;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(number) {
    if (number < this._from && number > this._to) {
      throw new RangeError("Number must be in range of [from:to]");
    }
    return number;
  }
}

/*
Создать класс Figure3D
Создать классы-потомки для Шара, Цилиндра и Куба.
У всех классов должен быть метод для рассчета объема.
*/

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {
    return null;
  }
}

class Ball extends Figure3D {
  constructor(radius) {
    super("Ball");
    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * (Math.PI * this.radius ** 3);
  }
}

class Cylinder extends Figure3D {
  constructor(radius, height) {
    super("Cylinder");
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return Math.PI * this.radius ** 2 * this.height;
  }
}

class Cube extends Figure3D {
  constructor(side) {
    super("Cube");
    this.side = side;
  }
  getVolume() {
    return this.side ** 3;
  }
}

