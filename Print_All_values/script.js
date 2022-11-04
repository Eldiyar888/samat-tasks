const linkedList = {
    value: 5,
    next: {
      value: 10,
      next: {
        value: 100,
        next: {
          value: 10000,
          next: {
            value: 20000,
            next: {
              value: 50000,
              next: {
                value: 10000000,
                next: {
                  value: 20000000,
                  next: {
                    value: 5,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  };



  function recursion(object) {
    for(let key in object) {
        if (typeof(object[key]) == 'object') {
            recursion(object[key]);
        }
        else {
            console.log(object[key])
        }
    }
}

recursion(linkedList);
