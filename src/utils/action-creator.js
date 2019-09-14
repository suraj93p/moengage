export default (type, ...argNames) => {
    return (...args) => {
        let action = { type };
        argNames.forEach((arg, index) => action[arg] = args[index]);
        return action;
    };
};
