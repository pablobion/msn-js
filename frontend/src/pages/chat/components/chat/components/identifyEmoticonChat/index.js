import React, { useRef } from "react";

const Scripts = () => {
    const preventEmoticons = ({ texto, setTexto }) => {
        // const regex = /:\)|:-\)|:\(|:-\(|;\);-\)|:-O|8-|:P|:D|:\||:S|:\$|:@|8o\||\+o\(|\(H\)|\(C\)|\(\?\)/gm;

        const emoticons = {
            ":)": 1,
            "(:": 1,
            ":D": 2,
            ";)": 3,
            ":o": 4,
            ":O": 4,
            "(h)": 5,
            "(H)": 5,
            ":@": 6,
            ":s": 7,
            ":S": 7,
            ":$": 8,
            ":(": 9,
            "):": 9,
            ":|": 10,
            "(a)": 11,
            "(A)": 11,
            ":r": 12,
            ":R": 12,
            "8|": 13,
            "8-|": 13,
            "|-)": 14,
            "8-)": 15,
            "^o)": 16,
            ":/": 17,
            ":p": 18,
            ":P": 18,
            ":{": 19,
            ":e": 20,
            ":E": 20,
            ":[": 21,
            ":'(": 21,
            "]:": 21,
            ")':": 21,
            "(y)": 22,
            "(Y)": 22,
            "(n)": 23,
            "(N)": 23,
            "(z)": 26,
            "(Z)": 26,
            "(x)": 24,
            "(X)": 24,
            "(d)": 25,
            "(D)": 25,
            "(i)": 27,
            "(I)": 27,
            "(^)": 28,
            "(*)": 29,
            ":#": 30,
            "#:": 30,
            "<:o": 31,
            "(l)": 32,
            "(L)": 32,
            "<3": 32,
            "(u)": 33,
            "(U)": 33,
            "3<": 33,
            "3>": 33,
            "(e)": 34,
            "(E)": 34,
            "(o)": 35,
            "(O)": 35,
            "(k)": 36,
            "(K)": 36,
            "(m)": 37,
            "(M)": 37,
            "(c)": 38,
            "(C)": 38,
            "(g)": 39,
            "(G)": 39,
            "(sn)": 40,
            ":-*": 41,
            "(f)": 42,
            "(F)": 42,
            "(w)": 43,
            "(W)": 43,
            "(ba)": 44,
            "(pl)": 45,
            "(p)": 46,
            "(P)": 46,
            "(ll)": 47,
            "(~)": 48,
            "(pi)": 49,
            "(PI)": 49,
            "(@)": 50,
            "(so)": 51,
            "(&)": 52,
            "(au)": 53,
            "(ap)": 54,
            "(um)": 55,
            "(ip)": 56,
            "(8)": 57,
            "(co)": 58,
            "(mp)": 59,
            "(st)": 60,
            "(li)": 61,
            "(mo)": 62,
            "(b)": 63,
            "(B)": 63,
        };

        Object.keys(emoticons).map(function (objectKey, index) {
            const value = emoticons[objectKey];

            if (texto.slice(texto.length - 2, texto.length) === objectKey) {
                setTexto(`${texto.slice(0, texto.length - 2)} <img src='${require(`../sendEmoticons/assets/${value}.png`).default}'></img>`);
            } else if (texto.slice(texto.length - 3, texto.length) === objectKey) {
                setTexto(`${texto.slice(0, texto.length - 3)} <img src='${require(`../sendEmoticons/assets/${value}.png`).default}'></img>`);
            } else if (texto.slice(texto.length - 4, texto.length) === objectKey) {
                setTexto(`${texto.slice(0, texto.length - 4)} <img src='${require(`../sendEmoticons/assets/${value}.png`).default}'></img>`);
            }
        });

        // if (texto.slice(texto.length - 2, texto.length) === ":(") setTexto(`${texto.slice(0, texto.length - 2)} <img src='${require(`../sendEmoticons/assets/1.png`).default}'></img>`);
    };

    const eastereggschat = ({ texto, setTexto }) => {
        if (texto === "modo pablo") {
            //meu easteregg
            setTexto(`pablo é o best programador ever`);
        }
        if (texto === "modo kyanne") {
            //easteregg para minha prima
            setTexto(`<div style='display: flex; align-items: center; '><img style='width: 25px;' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Avai_FC_%2805-E%29_-_SC.svg/1200px-Avai_FC_%2805-E%29_-_SC.svg.png"/><p style='color: blue ; margin-left: 5px'> </p></div>`);
        }
        if (texto === "modo bruno") {
            //easteregg para minha prima
            setTexto(`<div style='display: flex; align-items: center; '><img style='width: 40px;' src="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2014/09/04/maconha.jpg"/><p style='color: green ; margin-left: 5px'> </p></div>`);
        }
    };

    return [preventEmoticons, eastereggschat];
};

export default Scripts;
