class City {
  constructor({
    city,
    growth_from_2000_to_2013,
    latitude,
    longitude,
    population,
    rank,
    state,
  } = {}) {
    this._name = city;
    this._growth_from_2000_to_2013 = growth_from_2000_to_2013;
    this._latitude = latitude;
    this._longitude = longitude;
    this._population = population;
    this._rank = rank;
    this._state = state;
  }

  get name() {
    return this._name;
  }

  get position() {
    return [this._latitude, this._longitude];
  }

  get population() {
    return this._population;
  }

  get rank() {
    return this._rank;
  }

  get state() {
    return this._state;
  }

  isNegative() {
    const statistic = this._growth_from_2000_to_2013;
    return Boolean(+statistic.slice(0, statistic.length - 1) < 0);
  }

  get statistics() {
    return this._growth_from_2000_to_2013;
  }
}

export default City;
