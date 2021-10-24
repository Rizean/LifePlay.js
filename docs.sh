#!/usr/bin/env bash
jest
jest-coverage-badges
jsdoc2md --files src/core/**.js --files src/core/**/**.js > docs/API.md

