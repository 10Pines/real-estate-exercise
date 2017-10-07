// Setup chai
import chai, {expect} from 'chai';

chai.use(require('chai-datetime'));
global.expect = expect;

global.td = require('testdouble');
