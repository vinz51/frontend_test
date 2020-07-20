import City from "../city";

describe("City model", () => {
  it("instanciates model", () => {
    const myCity = new City({
      city: "New York",
      growth_from_2000_to_2013: "4.8%",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York",
    });

    expect(myCity.name).toEqual("New York");
    expect(myCity.position).toEqual([40.7127837, -74.0059413]);
    expect(myCity.population).toEqual("8405837");
    expect(myCity.rank).toEqual("1");
    expect(myCity.state).toEqual("New York");
    expect(myCity.isNegative()).toBe(false);
    expect(myCity.statistics).toBe("4.8%");
  });

  it("returns true when isNegative", () => {
    const myCity = new City({ growth_from_2000_to_2013: "-4.8%" });

    expect(myCity.isNegative()).toBe(true);
    expect(myCity.statistics).toBe("-4.8%");
  });
});
