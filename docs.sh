#!/usr/bin/env bash
jest
jest-coverage-badges
jsdoc2md src/core/objects/LPBoolean.js > docs/LPBoolean.md
jsdoc2md src/core/objects/LPFloat.js > docs/LPFloat.md
jsdoc2md src/core/objects/LPString.js > docs/LPString.md
jsdoc2md src/core/objects/LPBuilding.js > docs/LPBuilding.md
jsdoc2md src/core/objects/LPBuildingAlias.js > docs/LPBuildingAlias.md
jsdoc2md src/core/objects/LPActor.js > docs/LPActor.md
jsdoc2md src/core/objects/LPNPC.js > docs/LPNPC.md
jsdoc2md src/core/objects/LPPlayer.js > docs/LPPlayer.md

jsdoc2md src/core/LPAction.js > docs/LPAction.md
jsdoc2md src/core/LPDescription.js > docs/LPDescription.md
jsdoc2md src/core/LPMod.js > docs/LPMod.md
jsdoc2md src/core/LPScene.js > docs/LPScene.md
jsdoc2md src/core/LPStat.js > docs/LPStat.md
jsdoc2md src/core/LPTalk.js > docs/LPTalk.md
