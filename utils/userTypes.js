export const USER_STRATEGIST = "USER_STRATEGIST";

const userTypes = {
    USER_STRATEGIST: {
        name: "estratega",
        graphicUrl: "/profiles/strategist-picture.png",
    },
};

export function getName(type) {
    try {
        return userTypes[type].name;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export function getGraphic(type) {
    try {
        return userTypes[type].graphicUrl;
    } catch (err) {
        console.log(err);
        return false;
    }
}
