"use strict";
var $ = function (id) {
    return document.getElementById(id);
};
var result = "";

function myclick(a) {
    result = result + a;
    $("display").value = result;
};

function equalto() {
    try {
        result = eval(result);
    }
    catch(error)
        {
            result = alert("wrong error");
        }
    $("display").value = result;

};

function ce() {
    result = "";
    $("display").value = "0";

};

function del() {
    result = result.toString();
    result = result.substr(0, result.length - 1);
    $("display").value = result;

};

function fsin() {
    $("display").value = Math.sin($("display").value);

};

function fcos() {
    $("display").value = Math.cos($("display").value);

};

function ftan() {
    $("display").value = Math.tan($("display").value);

};

function fsquare() {
    $("display").value = Math.pow($("display").value, 2);

};

function fsqrt() {
    $("display").value = Math.pow($("display").value, 1 / 2);

};

function power() {
    result = result + "**";
    $("display").value = result;
};

function log() {
    $("display").value = Math.log10($("display").value);

};

function sign() {
    if (result.substring(0, 1) == "-")
        result = result.substring(1, result.length)
    else
        result = "-" + result;
    $("display").value = result;
};

function pie() {

    if (result == "") {
        result = Math.PI;

    } else {
        result = Math.PI * result;
    }
    $("display").value = result;

};
