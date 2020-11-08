/**
 * This usertypes it's a bridge between real type of user and system-based name
 */

export const USER_STRATEGIST = "USER_STRATEGIST";

const userTypes = {
    USER_STRATEGIST: {
        name: "estratega",
        graphicUrl: "/profiles/strategist-picture.png",
    },
};

//Returns real usertype name
export function getName(type) {
    try {
        return userTypes[type].name;
    } catch (err) {
        console.log(err);
        return false;
    }
}

//returns the graphic of the usertype
export function getGraphic(type) {
    try {
        return userTypes[type].graphicUrl;
    } catch (err) {
        console.log(err);
        return false;
    }
}
