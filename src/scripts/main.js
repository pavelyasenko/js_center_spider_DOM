'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const topPositon = (wallRect.height - spiderRect.height) / 2;
const leftPositon = (wallRect.width - spiderRect.width) / 2;

spider.style.top = `${topPositon}px`;
spider.style.left = `${leftPositon}px`;
