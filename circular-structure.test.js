class ThingManager {
  things;
  constructor() {
    this.things = [];
  }

  register(thing) {
    this.things.push(thing)
  }
}

class Thing {
  thingManager;

  constructor(thingManager) {
    this.thingManager = thingManager
    this.thingManager.register(this)
  }

  get thingManager() {
    return this.thingManager;
  }

  toJSON() {
    return { safe: 'object' }
  }
}

class ThingError extends Error {
  thing;

  constructor(thing) {
    super('Error with thing!')
    this.thing = thing
  }

  get thing() {
    return thing
  }
}

describe('circular structure', () => {
  it('fails', () => {
    const thingManager = new ThingManager();
    const thing = new Thing(thingManager);

    // This error should not have a circular reference because `toJSON` is implemented on `thing` that creates a
    // safe, non-circular object.
    throw new ThingError(thing);
  })
})
