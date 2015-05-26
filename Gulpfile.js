var gulp = require('gulp'),
    gulpBase = require('./gulpBase');

gulpBase.createDefaultTasks(gulp, {
    webpackConfig:require('./webpack.config.js'),
    rootDir: __dirname
});