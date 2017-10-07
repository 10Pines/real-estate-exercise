// Setup jsdom
require("jsdom-global")();

import "ignore-styles";

//Setup chai
import chai, {expect} from "chai";
chai.use(require("chai-datetime"));
chai.use(require("chai-enzyme")());
global.expect = expect;

import {mount, render, shallow} from "enzyme";
global.shallow = shallow;

global.td = require("testdouble");
