import data from '../database/data.json';

export const getItems = (pathFilter) => {
    const itemsByFeature = {};
    const pathBackstage = {};
    const pathDailychecks = {};
    const pathCommon = {};
  
    Object.values(data).forEach((featureGroup) => {
      featureGroup.forEach((featureItem) => {
        const featurePath = featureItem.feature.path;
        if (pathFilter && featurePath !== pathFilter) {
          return;
        }
        if (!itemsByFeature[featurePath]) {
          itemsByFeature[featurePath] = [];
        }
  
        featureItem.feature.scenarios.forEach((scenario) => {
          const scenarioSteps = scenario.steps.map((step) => step.value);
          itemsByFeature[featurePath].push(...scenarioSteps);
  
          if (featurePath.includes("cypress/e2e/feature\\BACKSTAGE\\")) {
            pathBackstage[featurePath] = pathBackstage[featurePath]
              ? [...pathBackstage[featurePath], ...scenarioSteps]
              : [...scenarioSteps];
          }else if(featurePath.includes("cypress/e2e/feature\\DAILYCHECKS\\")){
            pathDailychecks[featurePath] = pathDailychecks[featurePath]
            ? [...pathDailychecks[featurePath], ...scenarioSteps]
            : [...scenarioSteps];
          }else if(featurePath.includes("cypress/e2e/feature\\COMMON\\")){
            pathCommon[featurePath] = pathCommon[featurePath]
            ? [...pathCommon[featurePath], ...scenarioSteps]
            : [...scenarioSteps];
          }
        });
      });
    });
  
    console.log(pathDailychecks);
    console.log(pathBackstage);
    console.log(pathCommon);
    return pathDailychecks;
  };


  

  
 