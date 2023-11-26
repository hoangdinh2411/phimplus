interface CustomWindow extends Window {
  FB?: {
    init: (params: {
      appId: string;
      cookie: boolean;
      xfbml: boolean;
      version: string;
    }) => void;
    XFBML: any;
  };
  fbAsyncInit?: () => void;
}
declare const window: CustomWindow;

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID || "";

export function initFacebookSdk() {
  console.log("first");
  if (window.FB) {
    window.FB.XFBML.parse();
  }
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    const locate = process.env.LANGUAGES || "vi_VN";
    window.fbAsyncInit = function () {
      if (window.FB) {
        window.FB.init({
          appId: facebookAppId,
          cookie: true,
          xfbml: true,
          version: "v18.0",
        });
      }
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];

      if (!fjs) {
        return;
      }

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);
      js.id = id;

      if ("src" in js) {
        js.src = `https://connect.facebook.net/${locate}/sdk.js`;
      }

      if (fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  });
}
