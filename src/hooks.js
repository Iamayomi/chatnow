export const hook = {
    before: {
        all: [
      
        ]
    },
    after: {
        all: [
            async (context) => {
                console.log('A global "after" hook just ran for all services');
                return context;
            }
        ]
    },
    error: {
        all: [
            async (context) => {
                console.log('A global "error" hook just ran for all services');
                return context;
            }
        ]
    }
};

