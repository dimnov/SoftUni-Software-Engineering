function cars(input) {
  const objects = (function () {
    const objectStore = {};

    function create(name, parentName) {
      const obj = {};
      objectStore[name] = obj;

      if (parentName) {
        objectStore[name] = Object.create(objectStore[parentName]);
      }
    }

    function set(name, key, value) {
      objectStore[name][key] = value;
    }

    function print(name) {
      const obj = objectStore[name];
      let props = '';

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          props += `${key}:${obj[key]},`;
        }
      }

      let proto = Object.getPrototypeOf(obj);
      while (proto) {
        for (const key in proto) {
          if (proto.hasOwnProperty(key)) {
            props += `${key}:${obj[key]},`;
          }
        }
        proto = Object.getPrototypeOf(proto);
      }

      console.log(props.slice(0, -1));
    }

    return {
      create,
      set,
      print,
    };
  })();

  input.forEach(line => {
    const [command, name, ...tokens] = line.split(' ');

    switch (command) {
      case 'create':
        if (tokens[0] === 'inherit') objects.create(name, tokens[1]);
        else objects.create(name);
        break;

      case 'set':
        objects.set(name, tokens[0], tokens[1]);
        break;

      case 'print':
        objects.print(name);
        break;
    }
  });
}
cars(['create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2']);