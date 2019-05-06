// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  myApiUrl: "https://api.github.com/users/lwairore?access_token=287f559e19af292ba26a1bd5adae057fd1f1a739",
  apiPartOneUrl: "https://api.github.com/users/",
  apiPartThreeUrl: "?access_token=287f559e19af292ba26a1bd5adae057fd1f1a739",
  myRepoApiUrl: "https://api.github.com/users/lwairore/repos",
  OtherRepoApi1Url:"https://api.github.com/users/",
  OtherRepoApi2Url:"/repos"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
